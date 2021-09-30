import { motion } from 'framer-motion'
import Social from '../Social'
import { GrMail } from 'react-icons/gr'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.icons}>
            <Social />
          </div>
          <div className={styles.title}>
            <hr />
            <p>Vadim Ghedreutan</p>
          </div>
          <div className={styles.description}>
            <h1>
              <span>Front-End Web Developer</span>
              <span>& IT Support.</span>
            </h1>
          </div>

          <motion.div
            className={styles.animation}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <a href="mailto:vadim.ghedreutan@gmail.com">
              <GrMail />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
