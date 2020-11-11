import React from "react";

export default () => {
  return (
    <>
      <div className='review'>
        <div className='review__center center'>
          <div className='review__stage stage' data-aos='animation-scale-y'>
            What People Say
          </div>
          <h2 className='review__title title h1' data-aos='animation-scale-y' data-aos-delay='200'>
            Trusted by <br />
            Clients.
          </h2>
          <div className='review__container' data-aos='animation-translate-y' data-aos-delay='400'>
            <div className='review__slider owl-carousel js-slider-review'>
              <div className='review__item'>
                <div className='review__text'>
                  “ Folio Designer is a clean and creative landing page that matches with any freelancer or designer,
                  you can easily to build the page in Sketch or Figma.”
                </div>
                <div className='review__author'>
                  <div className='review__ava'>
                    <img className='review__pic' src='img/ava-2.png' alt='' />
                  </div>
                  <div className='review__details'>
                    <div className='review__man h5'>Dash</div>
                    <div className='review__company'>UI8</div>
                  </div>
                </div>
              </div>
              <div className='review__item'>
                <div className='review__text'>
                  “ Folio Designer is a clean and creative landing page that matches with any freelancer or designer,
                  you can easily to build the page in Sketch or Figma.”
                </div>
                <div className='review__author'>
                  <div className='review__ava'>
                    <img className='review__pic' src='img/ava-2.png' alt='' />
                  </div>
                  <div className='review__details'>
                    <div className='review__man h5'>Dash</div>
                    <div className='review__company'>UI8</div>
                  </div>
                </div>
              </div>
              <div className='review__item'>
                <div className='review__text'>
                  “ Folio Designer is a clean and creative landing page that matches with any freelancer or designer,
                  you can easily to build the page in Sketch or Figma.”
                </div>
                <div className='review__author'>
                  <div className='review__ava'>
                    <img className='review__pic' src='img/ava-2.png' alt='' />
                  </div>
                  <div className='review__details'>
                    <div className='review__man h5'>Dash</div>
                    <div className='review__company'>UI8</div>
                  </div>
                </div>
              </div>
              <div className='review__item'>
                <div className='review__text'>
                  “ Folio Designer is a clean and creative landing page that matches with any freelancer or designer,
                  you can easily to build the page in Sketch or Figma.”
                </div>
                <div className='review__author'>
                  <div className='review__ava'>
                    <img className='review__pic' src='img/ava-2.png' alt='' />
                  </div>
                  <div className='review__details'>
                    <div className='review__man h5'>Dash</div>
                    <div className='review__company'>UI8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='review__bg'>
          <div className='review__preview'>
            <img
              className='review__pic js-parallax'
              data-scale='1.5'
              data-orientation='down'
              src='img/review-cube.png'
              alt=''
            />
          </div>
          <div className='review__preview'>
            <img className='review__pic' src='img/review-cube.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};
