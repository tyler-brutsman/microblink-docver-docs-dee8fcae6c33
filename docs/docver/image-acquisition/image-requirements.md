---
id: image-requirements
title: Image requirements
sidebar_position: 1
---

# Image requirements

The accuracy of any remote ID authentication solution is going to be heavily impacted by the quality of images and BlinkID Verify is no exception. To best facilitate the collection of quality images in a tried and tested low-friction user experience, we recommend using our [Client-side SDKs](./client-sdks).

:::tip[Image Quality Check]
BlinkID Verify performs it's own image quality check and includes the result in the response. This can be helpful for implementing retry workflows and providing additional user education for achieving an adequate image. 
:::

When using BlinkID Verify with Microblink client SDKs or other image acquisition processes, here are a list of requirements the images should adhere to for optimal performance. 

## Image Formats

​All endpoints accept **jpg/jpeg** and **png** formats. The resolution of the image should be at least **1080p** (1920×1080 px) and **uncompressed**. Smaller resolutions are accepted, but won't provide optimal results. Larger resolutions are also accepted, but won't improve the scanning process significantly. There is no need to downscale your images before sending them to the API.

## Positioning

Ensure the document fills approximately 70% - 90% of the image and is the original, uncropped and unprocessed camera frame.

![Image positioning](/img/image-positioning.png)

Unfortunately, BlinkID Verify can't detect features hidden from view. Ensure the document is fully visible.

![Image occlusion](/img/image-occluded.png)

## Framing

Let the document image 'breathe' by leaving sufficient spacing on each side. This will help us better detect the edges of the document. 

![Image framing](/img/image-framing.png)

## Lighting conditions

Ensure good lighting conditions. Make sure the document is well-lit and avoid scanning against bright backgrounds.

![Image lighting](/img/image-lighting.png)

Natural daylight produces best results. Avoid using your flashlight as it's likely to cause glare.

![Image glare](/img/image-glare.png)

## Resolution

Blurred images are difficult to read even for us humans. Our machine learning solution is fast and accurate, but still not superhuman. 

![Image blur](/img/image-blur.png)

## Conclusion

It can be difficult to get users to meet these image requirements when performing self quality assurance. Repeated image failures cause immense frustration and quickly leads to abandonment. For these reasons, it's crucial to have an image acquisition process that gets it right on the first attempt. Try our client SDKs for an optimized user experience that maximizes first time success rates. 