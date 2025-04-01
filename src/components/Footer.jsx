import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter
        </p>
        <p className="footer-subscription-text">
          You can also unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email"  placeholder='Your Email' className="footer-input" />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About us </h2>
              <Link to='/sign-up'></Link>
              <Link to=''>Investors</Link>
              <Link to=''>Meet the team</Link>
              <Link to=''>About us</Link>
              <Link to=''>Terms of Services</Link>
            </div>
            <div className="footer-link-items">
              <h2>App info </h2>
              <Link to=''></Link>
              <Link to=''>News</Link>
              <Link to=''>Patch notes</Link>
              <Link to=''>Microservices</Link>
              <Link to=''>Tech used</Link>
            </div>
          </div>
          {/* <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About us </h2>
              <Link to=''></Link>
              <Link to=''></Link>
              <Link to=''></Link>
              <Link to=''></Link>
              <Link to=''></Link>
            </div>
            <div className="footer-link-items">
              <h2>About us </h2>
              <Link to=''></Link>
              <Link to=''></Link>
              <Link to=''></Link>
              <Link to=''></Link>
              <Link to=''></Link>
            </div>
          </div> */}
        </div>

      <section className='social-media'>
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
                FitBro
            </Link>
          </div>
          <small className="website-rights">FitBro 2025</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/" target='blank' aria-label='Facebook'>
              <i className="fab fa-facebook-f"></i>
            </Link>
             <Link className="social-icon-link Instagram" to='/' target='blank' aria-label='Instagram'> 
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Footer