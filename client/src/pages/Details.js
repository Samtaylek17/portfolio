import React from "react";
import sprite from "../sprite.svg";
import { Link } from "react-scroll";

export default () => {
  return (
    <>
      <div className='details' id='details'>
        <div className='details__center center'>
          <div className='details__head' data-aos='animation-scale-y'>
            <div className='details__stage stage'>What I Do</div>
            <h3 className='details__info h3'>
              I enjoy creating beautiful, <br />
              user friendly digital experiences.
            </h3>
          </div>
          <h2 className='details__title' data-aos='animation-scale-y'>
            Dream. Plan. <br />
            Create.
          </h2>
          <div className='details__btn' data-aos='animation-translate-y'>
            <Link to='contact' smooth={true} className='btn btn_purple'>
              <span className='btn__text'>Contact Me</span>
              <svg className='icon icon-arrow-right'>
                <use href={sprite + "#icon-arrow-right"}></use>
              </svg>
            </Link>
          </div>
          <div className='details__container'>
            <div className='details__slider owl-carousel js-slider-details'>
              <div className='details__item'>
                <div className='details__preview details__preview_cursor' data-aos='animation-scale'>
                  <div className='details__img'>
                    <img className='details__pic' src='img/cursor.png' alt='' />
                  </div>
                </div>
                <h5 className='details__category h5' data-aos='animation-scale-y'>
                  User Interface
                </h5>
                <div className='details__text' data-aos='animation-scale-y'>
                  We have got quite a few already made templates for better project management that you can use now.
                </div>
                <div className='details__btn' data-aos='animation-scale-y'>
                  <button className='btn btn_dark'>Find out more</button>
                </div>
              </div>
              <div className='details__item'>
                <div className='details__preview details__preview_hand' data-aos='animation-scale' data-aos-delay='150'>
                  <div className='details__img'>
                    <img className='details__pic' src='img/hand.png' alt='' />
                  </div>
                </div>
                <h5 className='details__category h5' data-aos='animation-scale-y' data-aos-delay='150'>
                  User Experience
                </h5>
                <div className='details__text' data-aos='animation-scale-y' data-aos-delay='150'>
                  We have got quite a few already made templates for better project management that you can use now.
                </div>
                <div className='details__btn' data-aos='animation-scale-y' data-aos-delay='150'>
                  <button className='btn btn_dark'>Find out more</button>
                </div>
              </div>
              <div className='details__item'>
                <div
                  className='details__preview details__preview_color'
                  data-aos='animation-scale'
                  data-aos-delay='300'>
                  <div className='details__img'>
                    <img className='details__pic' src='img/color-picker.png' alt='' />
                  </div>
                </div>
                <h5 className='details__category h5' data-aos='animation-scale-y' data-aos-delay='300'>
                  UI Design Kit
                </h5>
                <div className='details__text' data-aos='animation-scale-y' data-aos-delay='300'>
                  We have got quite a few already made templates for better project management that you can use now.
                </div>
                <div className='details__btn' data-aos='animation-scale-y' data-aos-delay='300'>
                  <button className='btn btn_dark'>Find out more</button>
                </div>
              </div>
              <div className='details__item'>
                <div className='details__preview details__preview_cursor'>
                  <div className='details__img'>
                    <img className='details__pic' src='img/cursor.png' alt='' />
                  </div>
                </div>
                <h5 className='details__category h5'>User Interface</h5>
                <div className='details__text'>
                  We have got quite a few already made templates for better project management that you can use now.
                </div>
                <button className='details__btn btn btn_dark'>Find out more</button>
              </div>
              <div className='details__item'>
                <div className='details__preview details__preview_hand'>
                  <div className='details__img'>
                    <img className='details__pic' src='img/hand.png' alt='' />
                  </div>
                </div>
                <h5 className='details__category h5'>User Experience</h5>
                <div className='details__text'>
                  We have got quite a few already made templates for better project management that you can use now.
                </div>
                <button className='details__btn btn btn_dark'>Find out more</button>
              </div>
              <div className='details__item'>
                <div className='details__preview details__preview_color'>
                  <div className='details__img'>
                    <img className='details__pic' src='img/color-picker.png' alt='' />
                  </div>
                </div>
                <h5 className='details__category h5'>UI Design Kit</h5>
                <div className='details__text'>
                  We have got quite a few already made templates for better project management that you can use now.
                </div>
                <button className='details__btn btn btn_dark'>Find out more</button>
              </div>
            </div>
          </div>
        </div>
        <div className='details__figures'>
          <div className='details__figure'>
            <img
              className='details__pic js-parallax'
              data-scale='2'
              data-orientation='down'
              src='img/PNG/plant_4.png'
              alt=''
            />
          </div>
          <div className='details__figure'>
            <img
              className='details__pic js-parallax'
              data-scale='3'
              data-orientation='down'
              src='img/PNG/plant_2.png'
              alt=''
            />
          </div>
          <div className='details__figure'>
            <img
              className='details__pic js-parallax'
              data-scale='1.2'
              data-orientation='up'
              src='img/figure-3.png'
              alt=''
            />
          </div>
        </div>
        <Link className='details__contact' to='/'>
          Contact me
        </Link>
      </div>
    </>
  );
};
