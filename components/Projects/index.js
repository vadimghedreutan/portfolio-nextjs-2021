import Image from 'next/image'

import AmazonClone from '../../images/amazon_redesign.png'
import TeemOne from '../../images/teemone.png'
import TypeGame from '../../images/type_game.png'
import BookShare from '../../images/book_share.png'

export default function Projects() {
  return (
    <section className="projects_section" id="projects">
      <div className="container">
        <div className="projects">
          <div className="projects__l-img">
            <a href="https://ghedrik.info">
              <Image
                src={AmazonClone}
                alt="amazon redesign clone"
                placeholder="blur"
              />
            </a>
          </div>
          <div className="projects__r-img">
            <a href="https://teemone.de">
              <Image
                src={TeemOne}
                alt="Restaurant website for client"
                placeholder="blur"
              />
            </a>
          </div>
          <div className="projects__lb-img">
            <a href="https://typeracer-3f0ce.firebaseapp.com">
              <Image src={TypeGame} alt="type racer game" placeholder="blur" />
            </a>
          </div>
          <div className="projects__rb-img">
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
