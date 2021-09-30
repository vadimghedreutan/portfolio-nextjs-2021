import Social from '../Social'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.section}>
      <div className="container">
        <div className={styles.footer}>
          <Social />
          <div className={styles.content}>
            <p>© 2021 All rights reserved.</p>
            <p>– Designed & Coded by me</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
