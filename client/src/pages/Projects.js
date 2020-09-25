import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default () => {
  const showPanel = (evt, actionName) => {
    let tabContent = document.getElementsByClassName("cases__list");
    let i;
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("cases__link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(actionName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  // useEffect((e, website) => {
  //   showPanel(e, website);
  // }, []);

  return (
    <>
      <div className='cases cases_main' id='cases'>
        <div className='cases__center center'>
          <div className='cases__stage stage' data-aos='animation-scale-y'>
            Portfolio
          </div>
          <h2 className='cases__title h1' data-aos='animation-scale-y' data-aos-delay='150'>
            Look at My <br />
            Products.
          </h2>
          <div className='cases__nav' data-aos='animation-scale-y' data-aos-delay='300'>
            <Link className='cases__link active' onClick={(e) => showPanel(e, "website")} to='#'>
              Website
            </Link>
            <Link className='cases__link' onClick={(e) => showPanel(e, "illustraion")} to='#'>
              Illustration
            </Link>
            <Link className='cases__link' onClick={(e) => showPanel(e, "mobile")} to='#'>
              Mobile
            </Link>
          </div>
          <div
            id='website'
            className='cases__list js-owl'
            data-items-mobile-portrait='1'
            data-items-mobile-album='1'
            data-autoheight>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-1.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-2.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-3.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-4.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-5.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-6.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>
            </Link>
          </div>

          <div
            id='illustration'
            className='cases__list js-owl'
            data-items-mobile-portrait='1'
            data-items-mobile-album='1'
            data-autoheight>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-1.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-2.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-3.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-4.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-5.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-6.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>
            </Link>
          </div>
          <div
            id='mobile'
            className='cases__list js-owl'
            data-items-mobile-portrait='1'
            data-items-mobile-album='1'
            data-autoheight>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-1.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-2.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-3.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-4.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-5.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>{" "}
            </Link>
            <Link className='cases__item' data-aos='animation-translate-y' data-aos-delay='200' to='case.html'>
              <div className='cases__preview'>
                <img className='cases__pic' src='img/cases-pic-6.jpg' alt='' />
                <div className='cases__box'>
                  Case <br />
                  Study
                </div>
              </div>
              <div className='cases__body'>
                <h4 className='cases__info h4'>Collab Landing Page</h4>
                <div className='cases__text'>UI Kit, Coded Template</div>
              </div>
            </Link>
          </div>
        </div>
        <div className='cases__figures'>
          <div className='cases__figure'>
            <img
              className='cases__pic js-parallax'
              data-scale='2'
              data-orientation='down'
              src='img/figure-2.png'
              alt=''
            />
          </div>
          <div className='cases__figure'>
            <img
              className='cases__pic js-parallax'
              data-scale='1.8'
              data-orientation='down'
              src='img/figure-3.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
