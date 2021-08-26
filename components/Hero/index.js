import { motion } from 'framer-motion'
import Social from '../Social'
import { GrMail } from 'react-icons/gr'

function Hero() {
  return (
    <div className="hero_section">
      <div className="container">
        <div className="hero">
          <div className="hero__social">
            <Social />
          </div>
          <div className="hero__name">
            <hr />
            <p>Vadim Ghedreutan</p>
          </div>
          <div className="hero__title">
            <h1>
              <span>Web Developer</span>
              <span>and IT Support.</span>
            </h1>
          </div>

          <motion.div
            className="email_logo"
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
