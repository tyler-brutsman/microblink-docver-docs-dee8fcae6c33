---
id: capture-configurations
title: Capture configurations
sidebar_position: 4
---

# Capture configurations

BlinkID Verify accepts images in jpg/png format as base64 strings or image URLs. 

The Capture SDK, designed purely for the purpose of obtaining quality images for subsequent processing, has image return enabled by default. The SDK result will include two images for each document side scanned. The unedited camera frame that exposes the document and context should be used for the POST body to the BlinkID Verify API. 

The transformed image provides a cropped and perspective-corrected document image that is ideal for OCR but lacks the integrity and context necessary for an accurate document verification. 

:::tip[Image settings]
The CaptureSDK is equipped with default settings that balance user experience and image quality. Use the AnalyzerSettings to loosen or tighten image quality policies as needed for optimal downstream processing. This often has a direct impact to user experience and capture completion rates. 
:::