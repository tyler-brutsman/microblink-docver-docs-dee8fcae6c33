---
id: authentication
title: Authentication
sidebar_position: 2
---

Authenticating with the BlinkID Verify API using the cloud endpoint or a self-hosted endpoint leveraging basic security controls will require an auth token. 

:::info[Need a DPA?]
The Cloud API is available for testing BlinkID Verify in a non-production environment. To access API authentication keys, it's necessary to first establish a **Data Processing Agreement** (DPA) with Microblink. 

Email us at sales@microblink.com expressing your interest in testing our BlinkID Verify Cloud API. 
:::

Once API keys have been generated, they can be accessed through the [Microblink Developer Hub](https://developer.microblink.com/blinkidverify-api-key). These API keys will generate a token which then must be used in a basic authorization header like so:

```jsx title="cURL Sample"
curl --location '/docver' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
// highlight-next-line
--header 'Authorization: Basic {{token}}' \
--data '{
 "imageFront": { ... },
 "imageBack": { ... },
 "imageBarcode": { ... }
```

To authenticate with a self-hosted container that leverages the ENABLE_SECURITY, BASIC_AUTH_USERNAME, and BASIC_AUTH_PASSWORD environment variables, the authentication header is the same and the token can be computed as follows:

**Authorization: 'Basic ' + Base64.encode(username + ':' + password)**

Other methods of authentication may be used with proxy services and gateways.