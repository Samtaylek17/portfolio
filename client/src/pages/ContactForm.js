import React, { useState } from "react";
import Footer from "../templates/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4005/api/messages", {
      name,
      email,
      project,
      description,
    });

    setName("");
    setEmail("");
    setProject("");
    setDescription("");
  };

  return (
    <>
      <div className='wrapper wrapper_dark'>
        <div className='contacts'>
          <div className='contacts__center center'>
            <div className='contacts__container'>
              <div className='contacts__wrap'>
                <div className='contacts__stage stage' data-aos='animation-scale-y'>
                  Say hello{" "}
                  <span role='img' aria-labelledby='emoji'>
                    👋
                  </span>
                </div>
                <h2 className='contacts__title h1' data-aos='animation-scale-y' data-aos-delay='200'>
                  Let’s Work <br />
                  Together.
                </h2>
                <div className='contacts__info' data-aos='animation-scale-y' data-aos-delay='400'>
                  I’d love to meet up with you to discuss your venture, and potential collaborations.
                </div>
              </div>
              <div className='contacts__row'>
                <div className='contacts__details' data-aos='animation-translate-y'>
                  <Link className='contacts__line' to='mailto:hello@ui8.net'>
                    <div className='contacts__icon'>
                      {/* <svg className="icon icon-email">
                              <use xlink:to="img/sprite.svg#icon-email"></use>
                            </svg> */}
                    </div>
                    <div className='contacts__text'>hello@ui8.net</div>
                  </Link>
                  <div className='contacts__line'>
                    <div className='contacts__icon'>
                      {/* <svg className="icon icon-place">
                              <use xlink:to="img/sprite.svg#icon-place"></use>
                            </svg> */}
                    </div>
                    <div className='contacts__text'>
                      <p>4074 Ebert Summit Suite 375</p>
                      <p>Lake Leonardchester</p>
                    </div>
                  </div>
                  <Link className='contacts__line' to='tel:+441236547890'>
                    <div className='contacts__icon'>
                      {/* <svg className="icon icon-phone">
                              <use xlink:to="img/sprite.svg#icon-phone"></use>
                            </svg> */}
                    </div>
                    <div className='contacts__text'>+44 123 654 7890</div>
                  </Link>
                </div>
                <form
                  onSubmit={onSubmit}
                  className='contacts__form'
                  data-aos='animation-translate-y'
                  data-aos-delay='200'>
                  <div className='contacts__field field'>
                    <div className='field__wrap'>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='field__input'
                        type='text'
                        name='name'
                        placeholder='Name'
                      />
                      <div className='field__icon'>
                        {/* <svg className="icon icon-profile">
                                <use xlink:to="img/sprite.svg#icon-profile"></use>
                              </svg> */}
                      </div>
                    </div>
                  </div>
                  <div className='contacts__field field'>
                    <div className='field__wrap'>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='field__input'
                        type='email'
                        name='email'
                        placeholder='Email'
                      />
                      <div className='field__icon'>
                        {/* <svg className="icon icon-send">
                                <use xlink:to="img/sprite.svg#icon-send"></use>
                              </svg> */}
                      </div>
                    </div>
                  </div>
                  <div className='contacts__field field'>
                    <div className='field__wrap'>
                      <input
                        type='text'
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className='field__input'
                        placeholder='What are you working on?'
                      />
                      <div className='field__icon'>
                        {/* <svg className="icon icon-arrows">
                                <use xlink:to="img/sprite.svg#icon-arrows"></use>
                              </svg> */}
                      </div>
                    </div>
                  </div>
                  <div className='contacts__field field field_textarea'>
                    <div className='field__wrap'>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='field__textarea'
                        name='message'
                        placeholder='Message'></textarea>
                      <div className='field__icon'>
                        {/* <svg className="icon icon-message">
                                <use xlink:to="img/sprite.svg#icon-message"></use>
                              </svg> */}
                      </div>
                    </div>
                  </div>
                  <div className='contacts__btn'>
                    <button className='btn btn_purple'>
                      <span className='btn__text'>Let’s Talk</span>
                      {/* <svg className="icon icon-arrow-right">
                              <use xlink:to="img/sprite.svg#icon-arrow-right"></use>
                            </svg> */}
                    </button>
                  </div>
                </form>
              </div>
              <div className='contacts__category h5'>Let’s connect</div>
              <div className='contacts__social'>
                <div className='contacts__box' data-aos='animation-translate-y'>
                  <Link className='contacts__link' to='#'>
                    {/* <svg className="icon icon-instagram">
                            <use xlink:to="img/sprite.svg#icon-instagram"></use>
                          </svg> */}
                    <div className='contacts__text'>Instagram</div>
                  </Link>
                </div>
                <div className='contacts__box' data-aos='animation-translate-y' data-aos-delay='150'>
                  <Link className='contacts__link' to='#'>
                    {/* <svg className="icon icon-instagram">
                            <use xlink:to="img/sprite.svg#icon-instagram"></use>
                          </svg> */}
                    <div className='contacts__text'>Instagram</div>
                  </Link>
                </div>
                <div className='contacts__box' data-aos='animation-translate-y' data-aos-delay='300'>
                  <Link className='contacts__link' to='#'>
                    {/* <svg className="icon icon-instagram">
                            <use xlink:to="img/sprite.svg#icon-instagram"></use>
                          </svg> */}
                    <div className='contacts__text'>Instagram</div>
                  </Link>
                </div>
                <div className='contacts__box' data-aos='animation-translate-y' data-aos-delay='450'>
                  <Link className='contacts__link' to='#'>
                    {/* <svg className="icon icon-instagram">
                            <use xlink:to="img/sprite.svg#icon-instagram"></use>
                          </svg> */}
                    <div className='contacts__text'>Instagram</div>
                  </Link>
                </div>
              </div>
              <div className='figures'>
                <div className='figures__preview'>
                  <img className='figures__pic' src='img/figures-1.png' alt='' />
                </div>
                <div className='figures__preview'>
                  <img
                    className='figures__pic js-parallax'
                    data-scale='1.6'
                    data-orientation='up'
                    src='img/figures-2.png'
                    alt=''
                  />
                </div>
                <div className='figures__preview'>
                  <img
                    className='figures__pic js-parallax'
                    data-scale='1.3'
                    data-orientation='up'
                    src='img/figures-3.png'
                    alt=''
                  />
                </div>
                <div className='figures__preview'>
                  <img className='figures__pic' src='img/figures-4.png' alt='' />
                </div>
                <div className='figures__preview'>
                  <img
                    className='figures__pic js-parallax'
                    data-scale='2.3'
                    data-orientation='down'
                    src='img/figures-5.png'
                    alt=''
                  />
                </div>
                <div className='figures__preview'>
                  <img
                    className='figures__pic js-parallax'
                    data-scale='2'
                    data-orientation='up'
                    src='img/figures-6.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
