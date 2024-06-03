---
id: endpoints
title: Endpoints
sidebar_position: 1
---

# Endpoints

Below is a summary of the verification endpoints.

:::info[Technical docs]
For an exhaustive technical view of BlinkID Verify, see our [API Documentation](https://docs.microblink.com/documentation/doc-ver/current/overview.html#introduction).
:::

## Verification endpoints

### Document verification

<span class="inline-code">POST /docver</span>

<br></br><br></br>

This is the primary endpoint of BlinkID Verify. It accepts front, back, and barcode images for identity documents and performs a fraud analysis. Various parameters are provided for obtaining images in the response, modifying the sensitivity of specific fraud checks, and manipulating the endpoint behavior. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="minimal" label="Minimal" default>
```jsx title="cURL Sample"
curl -X POST /docver \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Basic {{token}}' \
--data '{
  "imageFront": {
    "imageUrl": "string",
    "imageBase64": "string",
    "imageFile": "string"
  },
  "imageBack": {
    "imageUrl": "string",
    "imageBase64": "string",
    "imageFile": "string"
  },
  "imageBarcode": {
    "imageUrl": "string",
    "imageBase64": "string",
    "imageFile": "string"
  }
}
```
  </TabItem>
  <TabItem value="full-body" label="Full Body" default>
```jsx title="cURL Sample"
curl -X POST /docver \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Basic {{token}}' \
--data '{
  "imageFront": {
    "imageUrl": "string",
    "imageBase64": "string",
    "imageFile": "string"
  },
  "imageBack": {
    "imageUrl": "string",
    "imageBase64": "string",
    "imageFile": "string"
  },
  "imageBarcode": {
    "imageUrl": "string",
    "imageBase64": "string",
    "imageFile": "string"
  },
  "returnFullDocumentImage": false,
  "returnFaceImage": false,
  "returnSignatureImage": false,
  "returnSecurityFeaturesDocumentImage": false,
  "screenMatchLevel": "DISABLED",
  "photocopyMatchLevel": "DISABLED",
  "barcodeAnomalyMatchLevel": "DISABLED",
  "photoForgeryMatchLevel": "DISABLED",
  "staticSecurityFeaturesMatchLevel": "DISABLED",
  "dataMatchMatchLevel": "DISABLED",
  "verificationSideMode": "MULTI_SIDE",
  "imageFormat": "PNG",
  "treatExpirationAsFraud": true,
  "imageQualityInterpretation": "IGNORE",
  "traceId": "string"
}
```
  </TabItem>
</Tabs>

:::tip[matchLevel parameters]
The matchLevel parameters accept a value of DEFAULT or LEVEL_1 through LEVEL_10 where 1 is relaxed and 10 is very strict. 

These parameters are optional and unless overriden, will use default sensitivities that are applicable to the widest market. 
:::

### Document verification multipart

### Barcode verification