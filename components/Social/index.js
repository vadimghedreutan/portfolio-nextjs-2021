import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

function Social() {
  return (
    <div className="social_links">
      <a href="https://www.instagram.com/vadim_ghedreutan/">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/GhedreutanVadim">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/vadimghedreutan/">
        <FaLinkedin />
      </a>
    </div>
  )
}

export default Social
