import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Advanced data integrity verification',
    img: require('@site/static/img/advanced-datachecks.webp').default,
    description: (
      <>
        BlinkID Verify authenticates documents with unmatched precision, and thwarts advanced fraud attempts with sophisticated cross-matching technology.
      </>
    ),
  },
  {
    title: 'Enhanced security and liveness detection',
    img: require('@site/static/img/enhanced-liveness.webp').default,
    description: (
      <>
        BlinkID Verify improves the verification process by establishing the presence of the document holder and confirming the authenticity of documents.
      </>
    ),
  },
  {
    title: 'Cutting-edge forgery and fraud detection',
    img: require('@site/static/img/fraud-detection.webp').default,
    description: (
      <>
        Our advanced platform and ML models detect and prevent document fraud, safeguarding against sophisticated forgeries and ensuring real-time presence during identity verification.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
