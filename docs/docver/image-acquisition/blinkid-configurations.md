---
id: blinkid-configurations
title: BlinkID configurations
sidebar_position: 3
---

# BlinkID configurations

BlinkID Verify accepts images in jpg/png format as base64 strings or image URLs. 

The BlinkID SDK does not have image return enabled by default since it increases memory consumption. It's necessary, then, to enable image return and convert the native image format to a base64 string or upload to an accessible cloud storage or CDN. 

Here's a snippet on how the SDK can be configured for image return:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JS" default>
```jsx title="src/app.js"
function init() {
    const blinkId = document.querySelector("blinkid-in-browser");

    blinkId.recognizerOptions = {
        'BlinkIdMultiSideRecognizer': {
            // highlight-next-line
            'saveCameraFrames': true
        }
    }

    // set blinkId engineLocation and workerLocation properties
    // intialize eventListeners
}   
```
  </TabItem>
  <TabItem value="swift" label="Swift">
```swift title="BlinkID-sample-Swift/ViewController.swift"
@IBAction func didTapScan(_ sender: AnyObject) {
    /** Create BlinkID recognizer */
    self.blinkIdRecognizer = MBBlinkIdMultiSideRecognizer()
    // highlight-next-line
    self.blinkIdRecognizer?.saveCameraFrames = true

    /** Create overlay settings and continue with intialization process */
    let settings: MBBlinkIdOverlaySettings = MBBlinkIdOverlaySettings()
}
```
  </TabItem>
  <TabItem value="java" label="Java">
```java title="blinkId/MenuActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    parent = findViewById(android.R.id.content);

    // setup recognizer and put it into recognizer bundle
    BlinkIdMultiSideRecognizer recognizer = new BlinkIdMultiSideRecognizer();
    // highlight-next-line
    recognizer.setSaveCameraFrames(true);

    // continue creating the recognizer bundler and initializing
    recognizerBundle = new RecognizerBundle(recognizer);
}
```
  </TabItem>
</Tabs>


:::warning[Cropped images]
The BlinkID SDK can return cropped images with the returnFullDocumentImage property/setting, however, cropped and post-processed images will result in failures on the back-end. BlinkID Verify requires the integrity of the original camera frame be retained with the surrounding context for an accurate verdict. 
:::

## Handling the SDK result

Once a successful scan is achieved, a native image object for the respective platform will be included for the result's frontCameraFrame, backCameraFrame, and barcodeCameraFrame properties. 

These native image formats will need to be converted to a base64 string or uploaded to an accessible URL where the API can download the images.

:::tip[Barcode frame]
Even if documents in your region don't contain a barcode, we still recommend mapping the barcodeCameraFrame SDK result to imageBarcode API parameter and passing an empty string for cases where the barcodeCameraFrame object is empty. 
:::