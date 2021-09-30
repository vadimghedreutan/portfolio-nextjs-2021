import { useState } from 'react'
import { Link } from 'react-scroll'
import { MenuIcon } from '@heroicons/react/solid'
import styles from './Header.module.scss'

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" smooth={true}>
            VG<span>Dev</span>
          </Link>
          <button className={styles.btn_mobile} type="button" onClick={toggle}>
            <MenuIcon />
          </button>
        </div>
        <div
          onClick={toggle}
          className={`lg:flex flex-grow items-center ${
            navbarOpen ? 'flex' : 'hidden'
          }`}
        >
          <ul className={styles.menu}>
            <li>
              <Link to="projects" smooth={true} duration={1000}>
                Works
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
