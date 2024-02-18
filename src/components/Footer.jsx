import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {

  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/home' className='social-logo'>
            DIGIX
            <i class="fa-solid fa-earth-americas"></i>
            </Link>
          </div>
          <small class='website-rights'>DIGIX © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href={"https://github.com/madheswaran079"}
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href={"https://www.linkedin.com/in/madheswaran-v-8b2b90245/"}
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link instagram'
              href={"https://instagram.com/madhes._v"}
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
