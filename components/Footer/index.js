import Social from '../Social'

function Footer() {
  return (
    <footer className="section_footer">
      <div className="container">
        <div className="footer">
          <Social />
          <div className="footer__content">
            <p>© 2021 All rights reserved.</p>
            <p>– Designed & Coded by me</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
