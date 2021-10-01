import Image from 'next/image'
import styles from './Projects.module.scss'

import AmazonClone from '../../images/amazon_redesign.png'
import TeemOne from '../../images/teemone.png'
import TypeGame from '../../images/type_game.png'
import BookShare from '../../images/book_share.png'

export default function Projects() {
  return (
    <section>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.top_l}>
            <a href="https://ghedrik.info">
              <Image
                src={AmazonClone}
                alt="amazon redesign clone"
                placeholder="blur"
              />
            </a>
          </div>
          <div className={styles.top_r}>
            <a href="https://teemone.de">
              <Image
                src={TeemOne}
                alt="Restaurant website for client"
                placeholder="blur"
              />
            </a>
          </div>
          <div className={styles.bottom_l}>
            <a href="https://typeracer-3f0ce.firebaseapp.com">
              <Image src={TypeGame} alt="type racer game" placeholder="blur" />
            </a>
          </div>
          <div className={styles.bottom_r}>
            <a href="https://booksharegkapp.herokuapp.com">
              <Image
                src={BookShare}
                alt="book sharing website"
                placeholder="blur"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
