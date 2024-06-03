@Library('JenkinsPipelineScripts@v18.7.1') _

class base {
    static String version = null
    static String dockerTag = null
}

if (common.isOnBranch('stable')) {
    def buildFolders = [:]
    node('low-end-docker || docker') {
        ws(common.getWorkspace()) {
            dir('docver-docs') {
                stage('Checkout') {
                    echo "Running source checkout on node '${env.NODE_NAME}', executor ${env.EXECUTOR_NUMBER}"
                    commonPlatformBuild.checkout()
					common.executeCmd("git submodule update --init --recursive")
                    common.executeCmd("git fetch -t")
                    stash name: 'source', includes: '**', useDefaultExcludes: false
                }

                stage('Parse version') {
                    version = common.executeCmdWithOutput("cat ./package.json | grep '\"version\":' | sed 's#\"version\": \"##' | sed 's#\",##' | tr -d ' '").trim()
                    dockerTag = version
                }

                if(common.isOnBranch('stable')) {
                    stage("Version check") {
                        def gitTag = common.executeCmdWithOutput("git describe --tags --abbrev=0 || exit 0").trim()
                        if(gitTag == "v" + version) {
                            error("Version " + version + " already exists")
                        }
                    }
                }
            }
        }
    }

    buildDocker("docver-docs-ui", version)

    node('low-end-docker || docker') {
        commonPlatformBuild.checkout()
        common.workaroundBBSPluginChaos()
        
        if(common.isOnBranch('stable')) {
            stage("git tag version ${version}") {
                common.executeCmd( "git tag v${version}" )
                common.executeCmd( "git push --tags")
            }
        }
    }
}

def buildDocker( String app, String version ) {
    node("low-end-docker || docker") {
        dir( common.getBuildWorkspace() ) {
            unstash 'source'
            def versionMatcher = 'v[0-9].*[0-9].*[0-9]'

            stage("Building docker image ${app}:${dockerTag}") {
                common.executeCmd("docker build -f ./Dockerfile . -t gcr.io/microblink-ai/${app}:${version}")
            }

            stage("Authenticate google cloud") {
                commonGoogleCloud.authDocker()
            }

            stage ("Push image ${app}") {
                def microblinkAiImage =  "gcr.io/microblink-ai/${app}"
                common.executeCmd("docker tag ${microblinkAiImage}:${version} ${microblinkAiImage}:${dockerTag}")
                common.executeCmd("docker push ${microblinkAiImage}:${dockerTag}")
            }
        }
    }
}

