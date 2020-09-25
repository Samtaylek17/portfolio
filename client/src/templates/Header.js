import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

export default () => {
  const toggleBurger = () => {
    const burger = document.querySelector(".js-header-burger");
    const wrapper = document.querySelector(".js-header-wrapper");
    const html = document.querySelector("html");
    const body = document.body;
    burger.addEventListener("click", function () {
      burger.classList.toggle("active");
      wrapper.classList.toggle("visible");
      html.classList.toggle("no-scroll");
      body.classList.toggle("no-scroll");
    });
  };

  return (
    <>
      <div className='main'>
        <div className='header js-header' id='header'>
          <div className='header__center center'>
            <Link className='header__logo' to='index-2.html'>
              <img className='header__pic' src='img/logo3.svg' alt='' />
            </Link>
            <div className='header__social header__social_main'>
              <Link className='header__link' to='#'>
                {" "}
                <i className='fab fa-dribbble'></i>&nbsp;&nbsp; <span>Dribbble</span>{" "}
              </Link>
              <Link className='header__link' to='#'>
                {" "}
                <i className='fab fa-linkedin'></i>&nbsp;&nbsp; Linkedin{" "}
              </Link>
            </div>
            <button onClick={toggleBurger} className='header__burger js-header-burger'></button>
          </div>
          <div className='header__wrapper js-header-wrapper'>
            <div className='header__preview'>
              <Link className='header__logo' to='index-2.html'>
                <img className='header__pic' src='img/logo-white.svg' alt='' />
              </Link>
              <div className='header__img'>
                <img className='header__pic' src='img/bg-header.png' alt='' />
              </div>
            </div>
            <div className='header__center center'>
              <div className='header__contacts'>
                <Link className='header__line' to='mailto:ogunsusitemitayo99@gmail.com'>
                  <div className='header__icon'>
                    {/* <svg className="icon icon-email">
                          <use xlink:to="img/sprite.svg#icon-email"></use>
                        </svg> */}
                  </div>
                  <div className='header__text'>ogunsusitemitayo99@gmail.com</div>
                </Link>
                <div className='header__line'>
                  <div className='header__icon'>
                    {/* <svg className="icon icon-place">
                          <use xlink:to="img/sprite.svg#icon-place"></use>
                        </svg> */}
                  </div>
                  <div className='header__text'>
                    <p>61, Fajuyi Road</p>
                    <p>Osun state, Nigeria.</p>
                  </div>
                </div>
                <Link className='header__line' to='tel:+2348054113760'>
                  <div className='header__icon'>
                    {/* <svg className="icon icon-phone">
                          <use xlink:to="img/sprite.svg#icon-phone"></use>
                        </svg> */}
                  </div>
                  <div className='header__text'>+234 805 411 3760</div>
                </Link>
              </div>
              <nav className='header__nav'>
                <Link className='header__item' to='#'>
                  <span>About</span>
                </Link>
                <Link className='header__item' to='#'>
                  <span>Work</span>
                </Link>
                <Link className='header__item' to='#'>
                  <span>Services</span>
                </Link>
                <Link className='header__item' to='#'>
                  <span>Contact</span>
                </Link>
              </nav>
              <div className='header__social header__social_inner'>
                <Link className='header__link' to='#'>
                  {/* <svg className="icon icon-dribbble">
                        <use xlink:to="img/sprite.svg#icon-dribbble"></use></svg> */}
                  Dribbble
                </Link>
                <Link className='header__link' to='#'>
                  {/* <svg className="icon icon-instagram">
                        <use xlink:to="img/sprite.svg#icon-instagram"></use></svg> */}
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='main__bg'>
          <img className='main__pic' src='img/main-bg.png' alt='' />
        </div>
        <div className='main__center center'>
          <div className='main__wrap'>
            <div className='main__stage stage' data-aos='transform'>
              Temitayo Ogunsusi
            </div>
            <h1 className='main__title title h1'>
              <span data-aos='transform' data-aos-delay='150'>
                Hello, &nbsp;
              </span>
              <span data-aos='transform' data-aos-delay='300'>
                I'm Temitayo.
              </span>
              <br />
              <span data-aos='transform' data-aos-delay='450'>
                I'm a{" "}
                <Typed
                  strings={["Freelancer.", "Web Developer.", "UI/UX Designer."]}
                  typeSpeed={120}
                  backSpeed={80}
                  loop
                />
              </span>
            </h1>
            <Link className='scroll js-scroll' to='#details' data-aos='transform'>
              <div className='scroll__icon'>
                <img className='scroll__pic' src='img/scroll.svg' alt='' />
              </div>
              <div className='scroll__text'>Scroll down</div>
            </Link>
          </div>
        </div>
        <div className='main__view' data-aos>
          <div className='main__preview'>
            <img className='main__pic' src='img/main-pic-6.png' alt='' />
          </div>
          <div className='main__preview'>
            <img
              className='main__pic js-parallax'
              data-scale='2.5'
              data-orientation='up'
              src='img/main-pic.png'
              alt=''
            />
          </div>
          <div className='main__preview'>
            <img
              className='main__pic js-parallax'
              data-scale='1.5'
              data-orientation='up'
              src='img/PNG/cone.png'
              alt=''
            />
          </div>
          <div className='main__preview'>
            <img className='main__pic' src='img/main-pic-3.png' alt='' />
          </div>
          <div className='main__preview'>
            <img className='main__pic' src='img/main-pic-4.png' alt='' />
          </div>
          <div className='main__preview'>
            <img
              className='main__pic js-parallax'
              data-scale='4.5'
              data-orientation='up'
              src='img/main-pic-5.png'
              alt=''
            />
          </div>
          <div className='main__preview'>
            <img
              className='main__pic js-parallax'
              data-scale='1.5'
              data-orientation='down'
              src='img/main-pic-7.png'
              alt=''
            />
          </div>
        </div>
        <div className='main__figures'>
          <div className='main__figure' data-aos='animation-translate-y'>
            <img
              className='main__pic js-parallax'
              data-scale='2.2'
              data-orientation='down'
              src='img/PNG/code_1.png'
              alt=''
            />
          </div>
          <div className='main__figure' data-aos='animation-translate-y' data-aos-delay='200'>
            <img
              className='main__pic js-parallax'
              data-scale='2.2'
              data-orientation='up'
              src='img/PNG/gear_2.png'
              alt=''
            />
          </div>
          <div className='main__figure' data-aos='animation-translate-y' data-aos-delay='400'>
            <img className='main__pic' src='img/PNG/cone.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};