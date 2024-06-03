# Release notes

## Version 3.0

TBD

## Version 2.6.0

#### What's New
- Update to BlinkID v6.6.0
- Added new formats for some newly supported classes (China, Australia, New Zealand, Ireland, USA)
- Removed inconsistent formats for Philippines Tax Id


#### API Changes
- Added `version` object in response, it returns API version and BlinkId Verify core version


## Version 2.5.0

#### What's New
- Added new fraud check called Data integrity which checks that the document contains all the information that is expected on that particular version of the document
- Removed Visual Anomaly check due to its high impact on false rejections. The overall true acceptance rate (BPCER) is improved. Exact improvement depends on the country/document
- Significant latency reduction by changing the return image format to JPEG
- Updated the Screen Check models which improves BPCER and APCER in terms of screen ### API Changes
- Added `dataIntegrityCheck` to DataCheck member
- Added `imageFormat` optional parameter. The default value is `PNG`
    - set to `JPG` for improved performance in request time
- Removed `AnomalyCheck` from `VisualCheck` member
- Removed `returnAnomalyHeatmap` optional setting from request
- Added new endpoint `docver/multipart` to support multipart form data
    - Added imageFrontFile, imageBackFile and imageBarcodeFile for image file upload
    - The endpoint supports all optional parameters
