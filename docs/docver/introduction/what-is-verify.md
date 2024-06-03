---
id: what-is-verify
title: What is BlinkID Verify
sidebar_position: 2
---

# What is BlinkID Verify

BlinkID Verify is a part of the Microblink Identity Suite of products that also includes a mobile or web SDK for capturing high-quality images of documents (Capture Pro) and a mobile or web SDK for extracting information from identity documents (BlinkID). Each product can be used separately or they can be utilized as a bundle for optimal end-to-end capture-extract-verify performance.

## BlinkID Verify Checks

<table>
  <tr>
    <th style={{textAlign: "center"}}>Check</th>
    <th style={{textAlign: "center"}}>Description</th>
  </tr>
  <tr>
    <td colspan="2" style={{textAlign: "center"}}>**Overall Score**</td>
  </tr>
  <tr>
    <td>Verification result</td>
    <td>Overall score for a document. This is the final conclusion based on decisioning logic and the checks below.</td>
  </tr>
  <tr>
    <td colspan="2" style={{textAlign: "center"}}>**Personal Data Checks**</td>
  </tr>
  <tr>
    <td>Overall Data Check</td>
    <td>A function of all other data checks, providing a summarised data check</td>
  </tr>
  <tr>
    <td>Data Integrity</td>
    <td>Checks if the document has all the data fields that it should contain.</td>
  </tr>
  <tr>
    <td>Data Consistency</td>
    <td>Checks that the data appearing in different places on the document is the same.</td>
  </tr>  
  <tr>
    <td>Data Format</td>
    <td>Checks if the fields are in the correct format based on our document knowledge.</td>
  </tr>
  <tr>
    <td>Data Logic</td>
    <td>Checks if the data makes sense, for example that the date of expiry is after the date of issue.</td>
  </tr>
  <tr>
    <td>Suspicous Data</td>
    <td>Checks for sample and specimen text in the data fields.</td>
  </tr>
  <tr>
    <td>Barcode Anomaly</td>
    <td>Checks if the barcode on the document is accurate and authentic.</td>
  </tr>
  <tr>
    <td colspan="2" style={{textAlign: "center"}}>**Document Liveness Checks**</td>
  </tr>
  <tr>
    <td>Document Liveness</td>
    <td>A function of Screen and Photocopy checks (if either fails, Liveness fails)</td>
  </tr>
  <tr>
    <td>Screen Check</td>
    <td>Determines if the document is presented on a screen (phone, tablet, desktop).</td>
  </tr>
  <tr>
    <td>Photocopy Check</td>
    <td>Checks if the image of the ID is a photocopy.</td>
  </tr>
  <tr>
    <td colspan="2" style={{textAlign: "center"}}>**Forensic (Visual) Checks**</td>
  </tr>
  <tr>
    <td>Face Photo Tampering</td>
    <td>Checks if the profile photo on the document has been tampered with.</td>
  </tr>
  <tr>
    <td>Static Security Features</td>
    <td>Analyzes security features to determine whether the document is legitimate.</td>
  </tr>
  <tr>
    <td colspan="2" style={{textAlign: "center"}}>**Additional Information**</td>
  </tr>
  <tr>
    <td>Image Quality</td>
    <td>Indicates whether the images are high enough quality for a fraud anlaysis.</td>
  </tr>
  <tr>
    <td>Hand Presence</td>
    <td>Checks if the hand is present on the camera to confirm that the user is holding the document.</td>
  </tr>
</table>

Using these fraud checks, BlinkID Verify will make a conclusion about a document's authenticity. This is pivotal for a thorough KYC process and is the ideal solution to combine with further database and/or biometric corroboration.

:::info[How does this work?]
Questions about these checks or want to speak to an expert? Contact sales@microblink.com to get connected with a Solutions Engineer. 
:::
