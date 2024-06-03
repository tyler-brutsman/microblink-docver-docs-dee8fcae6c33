---
id: self-hosted-api
title: Self hosted API
sidebar_position: 3
---

# Self hosted API

For production, BlinkID Verify is offered as a container that can be deployed and hosted on-premise or in a designated environment. 

:::tip[Testing self-hosted]
Free 30 day trial licenses are offered for self-hosted testing to mimic a production integration. Contact sales@microblink.com to redeem your free trial license. 
:::

Hosting the container on-premise simplifies privacy. Sensitive PII surrounding ID images and the extracted data from them can be entirely contained in a single environment which reduces exposure. 

Service-level agreements are also simplified since all critical reliant processes are self contained, however, it's necessary to then understand minimum hosting requirements, scaling, and other components to ensure adequate uptimes and response times. 

## Recommended resources

The solution is comprised of various services that carry out the request and provide a consumable fraud verdict. Below is a list of services and the resources necessary for each:

<table>
  <tr>
    <th>**Service name**</th>
    <th style={{textAlign: "center"}}>Requested CPU/Limit CPU</th>
    <th style={{textAlign: "center"}}>Requested Mem/Limit Mem</th>
  </tr>
  <tr>
    <td>doc-ver-api</td>
    <td style={{textAlign: "center"}}>2 vCPU / 4 vCPU</td>
    <td style={{textAlign: "center"}}>2 Gb / 4 Gb</td>
  </tr>
  <tr>
    <td>visual-anomaly</td>
    <td style={{textAlign: "center"}}>1 vCPU / 1 vCPU</td>
    <td style={{textAlign: "center"}}>1 Gb / 1 Gb</td>
  </tr>
  <tr>
    <td>anomdet-intermediary</td>
    <td style={{textAlign: "center"}}>0.3 vCPU / 1 vCPU</td>
    <td style={{textAlign: "center"}}>0.5 Gb / 1 Gb</td>
  </tr>
  <tr>
    <td>embedding-store</td>
    <td style={{textAlign: "center"}}>0.5 vCPU / 1 vCPU</td>
    <td style={{textAlign: "center"}}>1 Gb / 2 Gb</td>
  </tr>
  <tr>
    <td>postgresql</td>
    <td style={{textAlign: "center"}}>8 vCPU</td>
    <td style={{textAlign: "center"}}>24 Gb (minimum)</td>
  </tr>
  <tr>
    <td>bundle-visual-anomaly-core-versions</td>
    <td style={{textAlign: "center"}}>2 vCPU / 4 vCPU</td>
    <td style={{textAlign: "center"}}>2 Gb / 3 Gb</td>
  </tr>
</table>

## Full deployment instructions

For instructions and resources necessary to deploy BlinkID Verify, please visit our [GitHub](https://github.com/microblink/doc-ver-ops/tree/master).