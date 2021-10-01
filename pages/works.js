import { useState } from 'react'
import projects from '../components/data'
import styles from '../styles/Works.module.scss'
import Contact from '../components/Contact'
import Title from '../components/Title'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function Works() {
  const [data] = useState(projects)
  return (
    <>
      <section>
        <div className="container">
          <Title title="All projects" />
          <motion.div
            className={styles.grid}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear', duration: 0.3 }}
          >
            {data.map((item) => {
              return <Card key={item.id} {...item} />
            })}
          </motion.div>
        </div>
      </section>
      <Contact id="contacts" />
    </>
  )
}

function Card({ url, title, tags }) {
  return (
    <div className={styles.card}>
      <a href="https://ghedrik.info">
        <img src={url} alt="amazon redesign clone" />
      </a>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{tags}</p>
      </div>
    </div>
  )
}

export default Works
