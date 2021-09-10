import { FaInstagram, FaGithubAlt, FaLinkedin } from 'react-icons/fa'

function Social() {
  return (
    <div className="social_links">
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
