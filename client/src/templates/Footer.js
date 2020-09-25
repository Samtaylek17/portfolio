import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__center center'>
          <div className='footer__body'>
            <Link className='footer__logo' to='index-2.html'>
              <img className='footer__pic' src='img/logo-empty.svg' alt='' />
            </Link>
            <div className='footer__wrap'>
              <div className='footer__title h1'>You only have one chance to make a first impression.</div>
              <div className='footer__info h4'>Let’s make it an amazing one.</div>
            </div>
            <div className='footer__menu'>
              <Link className='footer__link' to='#'>
                About Me
              </Link>
              <Link className='footer__link' to='#'>
                Projects
              </Link>
              <Link className='footer__link' to='#'>
                Contact
              </Link>
              <Link className='footer__link' to='#'>
                Dribbble
              </Link>
              <Link className='footer__link' to='#'>
                Instagram
              </Link>
            </div>
          </div>
          <div className='footer__bottom'>
            <div className='footer__copyright'>© 2020, UI8 LLC.</div>
            <Link className='footer__scroll js-scroll' to='#header'>
              Back to top
            </Link>
          </div>
        </div>
        <div className='footer__bg'>
          <div className='footer__preview'>
            <img
              className='footer__pic js-parallax'
              data-scale='1.5'
              data-orientation='down'
              src='img/footer-cube-1.png'
              alt=''
            />
          </div>
          <div className='footer__preview'>
            <img
              className='footer__pic js-parallax'
              data-scale='1.8'
              data-orientation='up'
              src='img/footer-cube-1.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
