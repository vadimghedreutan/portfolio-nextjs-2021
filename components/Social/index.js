import { FaInstagram, FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import styles from './Social.module.scss'

function Social() {
  return (
    <div className={styles.links}>
      <a href="https://www.instagram.com/vadim_ghedreutan/">
        <FaInstagram />
      </a>
      <a href="https://github.com/vadimghedreutan">
        <FaGithubAlt />
      </a>
      <a href="https://www.linkedin.com/in/vadimghedreutan/">
        <FaLinkedin />
      </a>
    </div>
  )
}

export default Social
