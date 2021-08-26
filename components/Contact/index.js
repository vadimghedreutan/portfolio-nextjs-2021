import Image from 'next/image'
import { MailIcon } from '@heroicons/react/solid'
import profileImg from '../../images/portfolio.png'

export default function COntact() {
  return (
    <section className="section_contact" id="contact">
      <div className="container">
        <div className="contact">
          <h1>Get in touch</h1>
          <p>
            If you have a website or mobile app idea in mind or you need some
            advice about product, feel free to <span>contact me.</span>
          </p>
          <div className="contact__img">
            <Image src={profileImg} alt="Vadim Ghedreutan" />
            <span></span>
          </div>
          <a href="mailto:ghedrik@gmail.com">
            <button className="btn_footer">
              <MailIcon />
              ghedrik@gmail.com
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
