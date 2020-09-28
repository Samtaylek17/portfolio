import React from "react";
import { Link } from "react-scroll";

export default () => {
  return (
    <>
      <div className='work'>
        <div className='work__circles'></div>
        <div className='work__center center'>
          <div className='work__wrap'>
            <div className='work__stage stage stage_pink' data-aos='animation-scale-y'>
              Who I Work With
            </div>
            <h2 className='work__title title h1' data-aos='animation-scale-y' data-aos-delay='150'>
              Art Direction for Global Leading Brands.
            </h2>
            <div className='work__text' data-aos='animation-scale-y' data-aos-delay='300'>
              I research and create breakthrough - delightful ideas, leading visual designers.
            </div>
            <Link className='scroll js-scroll' data-aos='animation-scale-y' spy={true} smooth={true} to='cases'>
              <div className='scroll__icon'>
                <img className='scroll__pic' src='img/scroll.svg' alt='' />
              </div>
              <div className='scroll__text'>Scroll down</div>
            </Link>
          </div>
        </div>
        <div className='work__preview'>
          <img
            className='work__pic js-parallax'
            data-scale='2'
            data-orientation='down'
            src='img/work-cube.png'
            alt=''
          />
        </div>
        <div className='work__figures' data-aos>
          <div className='work__figure'>
            <img
              className='work__pic js-parallax'
              data-scale='1.3'
              data-orientation='up'
              src='img/work-fustrum.png'
              alt=''
            />
          </div>
          <div className='work__figure'>
            <img
              className='work__pic js-parallax'
              data-scale='1.5'
              data-orientation='up left'
              src='img/work-cube-2.png'
              alt=''
            />
          </div>
          <div className='work__figure'>
            <img
              className='work__pic js-parallax'
              data-scale='1.3'
              data-orientation='up right'
              src='img/work-cube-3.png'
              alt=''
            />
          </div>
          <div className='work__figure'>
            <img className='work__pic' src='img/work-cube-4.png' alt='' />
          </div>
          <div className='work__figure'>
            <img
              className='work__pic js-parallax'
              data-scale='1.1'
              data-orientation='left'
              src='img/work-cube-5.png'
              alt=''
            />
          </div>
          <div className='work__figure'>
            <img
              className='work__pic js-parallax'
              data-scale='1.2'
              data-orientation='right'
              src='img/work-cube-6.png'
              alt=''
            />
          </div>
          <div className='work__figure'>
            <img
              className='work__pic js-parallax'
              data-scale='1.2'
              data-orientation='down'
              src='img/work-cube-7.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
