import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title_cn: '网络算法',
    title_en: 'Network Algorithmic',
    Svg: require('../../static/img/algorithm.svg').default,
    description: (
      <>
        中国电子学会科学技术奖二等奖——层次化、并行化、智能化网流监控关键算法与技术
      </>
    ),
  },
  {
    title_cn: '系统设计',
    title_en: 'System Design',
    Svg: require('../../static/img/system.svg').default,
    description: (
      <>
       国家863目标导向项目——一体化网络数据深度安全检测与分析的技术与系统
      </>
    ),
  },
  {
    title_cn: '网络自动化',
    title_en: 'Network Automation',
    Svg: require('../../static/img/automation.svg').default,
    description: (
      <>
       国家自然科学基金面上项目——软件定义的网络自动化设计方法
      </>
    ),
  },
];

function Feature({Svg, title_cn, title_en, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title_cn} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title_cn}</h3>
        <h3>{title_en}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
