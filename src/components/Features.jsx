import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'
import FeatureCards from './FeatureCards'

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Tecnologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed using a cross-platforme technology, React Native.</p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCards 
            iconText={'React Native'}
            iconUrl={assets.react}
          />
          <FeatureCards 
            iconText={'JavaScript'}
            iconUrl={assets.javascript}
          />
        </div>
      </div>
    </div>
  )
}

export default Features