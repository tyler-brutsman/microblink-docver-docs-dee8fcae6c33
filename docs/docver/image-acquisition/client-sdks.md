---
id: client-sdks
title: Client SDKs
sidebar_position: 2
---

# Client SDKs

Microblink has supported the identity document scanning industry with our flagship product, BlinkID, since 2016. It's widely recognized for it's intuitive user experience, speed, and accuracy. 

In 2023, Microblink launched another client SDK, Capture, that is designed to be a lightweight and modular component for document workflows. Below, the pros and cons of each SDK is explored along with necessary configurations for use with BlinkID Verify. 

:::tip[Free trial]
Microblink offers free trials for all of our solutions. We're confident once you try them, you'll love them!
:::

## BlinkID SDK

The BlinkID SDK is a tightly coupled document scanning, classification, and extraction Software Development Kit. It's *on the edge* processing offers fast and accurate document classification and extraction data in device memory which can be useful for conditional or branching logic upstream from invoking APIs. 

Having an extraction-coupled scanning experience can be incredibly beneficial to achieving high first time success rates. Client-side validation of OCR extractability for mandatory document fields and parsability for document barcodes prevents images from being captured that will inevitably fail on the back-end. 

Extraction-coupled scanning comes at a cost, however. Larger SDK sizes and more frequent updates to keep the SDK current with new identity documents are two crucial considerations when choosing the right front-end component. 

## Capture SDK

The Capture SDK is a fresh approach to image acquision decoupled from document classification and extraction to minimize SDK size and maximize version shelf-life resulting in fewer updates. 

Various image quality models analyzing the video feed in real time will guide the user to achieving the ideal image capture on their first attempt, however, there is no guarantee that the image will be suitable for OCR and barcode extraction on the back-end.

## Comparison chart  

<table>
  <tr>
    <th></th>
    <th>BlinkID SDK</th>
    <th>Capture SDK</th>
  </tr>
  <tr>
    <td>**Size**</td>
    <td>~8.8 MB compressed, ~13.8 MB uncompressed</td>
    <td>~2.3 MB compressed, ~3.3 MB uncompressed</td>
  </tr>
  <tr>
    <td>**Platforms**</td>
    <td>Web, iOS, Android, React Native, Flutter, Cordova, Capcitor, Xamarin</td>
    <td>Web, iOS, Android</td>
  </tr>
  <tr>
    <td>**Function**</td>
    <td>Capture + Extract</td>
    <td>Capture</td>
  </tr>
  <tr>
    <td>**Camera Requirements**</td>
    <td>720p</td>
    <td>1080p</td>
  </tr>
</table>



## Configurations

As mentioned in the [Image Requirements](./image-requirements), it's necessary to ensure images are suitable for BlinkID Verify. Both SDKs excel at validating image quality in real time to ensure the ideal image can be acquired on the first attempt, however, both SDKs return multiple sets of images and it's important the right images are used to POST to the endpoint. 

Continue reading for recommended configuration of the BlinkID and Capture SDKs. 