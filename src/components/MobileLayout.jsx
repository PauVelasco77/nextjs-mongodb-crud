import styles from './MobileLayout.module.css'
import PropTypes from 'prop-types'

export default function Iphone14ProMax ({ children }) {
  return (
    <div className={styles.mobile}>
      <div className={styles['front-speaker']} />
      <div className={styles['dinamic-island']}>
        <div className={styles['front-camera']} />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles['antenna-bands']}>
        <div className={styles['top-band']} />
        <div className={styles['bottom-band']} />
      </div>
      <div className={styles['left-buttons']}>
        <div className={styles.slider} />
        <div className={styles['volume-up']} />
        <div className={styles['volume-down']} />
      </div>
      <div className={styles['right-buttons']}>
        <div className={styles['side-button']} />
      </div>
    </div>
  )
}

Iphone14ProMax.propTypes = {
  children: PropTypes.node.isRequired
}
