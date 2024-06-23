import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn the solution',
    Svg: require('@site/static/img/undraw_knowledge_re_5v9l.svg').default,
    description: (
      <>
        Discover how to get your Cloud Call Center up and running quickly.
        {/* Learn the solution to get your Cloud Call Center up and running quickly. */}
      </>
    ),
  },
  {
    title: 'Focus on productivity',
    Svg: require('@site/static/img/undraw_dev_productivity_re_fylf.svg').default,
    description: (
      <>
        {/* With our tutorials you will get best effeciency. */}
        With our tutorials, you will achieve optimal efficiency.
      </>
    ),
  },
  {
    title: 'Stay updated',
    Svg: require('@site/static/img/undraw_updates_re_o5af.svg').default,
    description: (
      <>
        {/* Check News and release notes to know what to try next. */}
        Review the news and release notes to determine the next steps.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
