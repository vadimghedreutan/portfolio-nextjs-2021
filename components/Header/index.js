import { Link } from 'react-scroll'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { MenuIcon } from '@heroicons/react/solid'
import styles from './Header.module.scss'

function Header() {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = useState(false)

  const toggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a onClick={() => router.push('/')}>
            VG<span>Dev</span>
          </a>
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
              <a to="projects" onClick={() => router.push('/works')}>
                Work
              </a>
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
