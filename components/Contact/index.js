import Image from 'next/image'
import { MailIcon } from '@heroicons/react/solid'
import profileImg from '../../images/portfolio.png'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.about}>
          <h1>Get in touch</h1>
          <p>
            If you have a website idea in mind or you need some advice about
            product, feel free to <span>contact me.</span>
          </p>
          <div className={styles.image}>
            <Image src={profileImg} alt="Vadim Ghedreutan" />
            <span></span>
          </div>
          <a href="mailto:ghedrik@gmail.com">
            <button className={styles.btn}>
              <MailIcon />
              ghedrik@gmail.com
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
