import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BlinkID Verify',
  tagline: 'the digital ID verification solution',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dap.test.microblink.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/docver-docs/',
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Microblink', // Usually your GitHub org/user name.
  projectName: 'BlinkID Verify Documentation', // Usually your repo name.

  onBrokenLinks: 'warn',//'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          //routeBasePath: 'docver-docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BlinkID Verify',
      logo: {
        alt: 'Docver Logo',
        src: 'img/logo-animated.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },/*
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'DOCS',
          items: [
            {
              label: 'BlinkID Verify',
              to: '/docs/category/introduction-1',
            },
          ],
        },
        {
          title: 'COMPANY',
          items: [
            {
              label: 'About us',
              href: 'https://microblink.com/about/',
            },
            {
              label: 'Tehnology',
              href: 'https://microblink.com/about/ai-technology/',
            },
            {
              label: 'Partners',
              href: 'https://microblink.com/about/partners/',
            },
          ],
        },
        {
          title: 'ACCOUNT',
          items: [
            {
              label: 'Log in',
              href: 'https://developer.microblink.com/',
            },
            {
              label: 'Sign up',
              href: 'https://developer.microblink.com/register',
            },
          ],
        },
        {
          title: 'GET IN TOUCH',
          items: [
            {
              label: 'Contact Sales',
              href: 'https://microblink.com/contact-us/',
            },
            {
              label: 'Contact Support',
              href: 'https://help.microblink.com/s/submit-request',
            },
            {
              label: 'Help Center',
              href: 'https://help.microblink.com/s/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Microblink. All rights reserved.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
