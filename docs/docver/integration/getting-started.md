---
id: getting-started
title: Getting started
sidebar_position: 1
---

# Getting started

BlinkID Verify is a server processed API and as such, it can be tested in a variety of ways. Regardless of which approach you choose, it's crucial to first understand how to evaluate a document authentication solution and to compile a test plan. 

:::tip[Testing]
When evaluating BlinkID Verify, it's best to choose a test plan that suits your needs. Available resources, depth of testing, and evaluation criteria can all play in important role in choosing the right approach. 
:::

## Evaluation criteria

It's necessary to first understand that there is no 100% accurate method of authenticating an identity document and detecting tampering. Contemporary solutions combine data analysis via APIs and heuristics with forensic analysis via machine learning models and human-in-the-loop review to maximize catch rates and minimize misclassifications, however, there is still considerable room for error.

Adept fraudsters exploiting weak security features on documents, poorly trained machine learning models, and lack of comprehensive fraud analysis are just a few reasons that a fraudulent document could be classified as authentic. When this happens, the investigative efforts to unwind the fraud can be costly and the damage from the fraudster is likely already done by the time it's detected. 

Conversely, highly sensitive models, poor document images, and bugs can easily result in authentic users being misclassified as fraudulent. This increases friction for real users and the impact can hurt a businesses reputation, not even mentioning the lost customer lifetime value. 

Therefore, measuring the efficacy of a document authentication solution is paramount to achieving an effective anti-fraud workflow. It’s most common to measure the efficacy of a document authentication solution through the following metrics:

<ul>
  <li>**Bona fide Presentation Classification Error Rate (BPCER)** is the percent of all authentic documents classified as fraudulent (*A.K.A. Document False Rejection Rate or DFRR*)</li>
  <li>**Attack Presentation Classification Error Rate (APCER)** is the percent of all fraudulent documents classified as authentic (*A.K.A. Document False Acceptance Rate or DFAR*)</li>
  <li>**System Error Rate (SER)** is the percent of all documents that could not be classified or returned an error</li>
  <li>**Processing Time** is the number of seconds it took for the document to be processed</li>
</ul>

While evaluations are performed on these metrics against internal and third party data sets, each environment is unique and factors such as document classes, image acquisition process, and sensitivity tuning can have a major impact on the overall results. For these reasons, it's always recommended that you perform an independent analysis of these metrics to ensure the solution can meet the needs of your unique business profile.

:::tip[Other considerations]
Beyond these core metrics, other important considerations include pricing, document coverage, and depth of fraud analysis. Please contact sales@microblink.com for an in-depth discovery call to ensure the solution aligns with your needs prior to testing.
:::

## Building a test plan

Now that a basis for thorough testing has been established, a test plan must be formulated. 

An effective test plan is comprised of:

<ul>
  <li>**Timeline** to ensure the evaluation can be concluded prior to target development sprints or other internal milestones</li>
  <li>**Personnel** that will be resonsible for carrying out the test plan</li>
  <li>**Input Data** to ensure a conclusion can be made that is relevant and statistically significant</li>
  <li>**Process** to define how the tests will be carried out and how the metrics for the success criteria will be captured</li>
  <li>**Success Criteria** to identify when a solution is achieving or failing expectations (*commonly based on the metrics described above*)</li>
</ul>

The test plan can be as formal or fluid as necessary but it should be established prior to testing.

:::tip[Not sure?]
Having troubles building a test plan? Unsure what would be reasonable success metrics? Missing a crucial component for the evaluation? Our Solutions Engineers will be happy to advise. 
:::

<br></br>
In the next section, we'll explore options for performing the evaluation which will help guide your test plan process.