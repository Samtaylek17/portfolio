import React, { useEffect } from "react";
import AOS from "aos";
import simpleParallax from "simple-parallax-js";
import ContactForm from "./pages/ContactForm";
import Reviews from "./pages/Reviews";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Header from "./templates/Header";
import Details from "./pages/Details";

export default () => {
  const parallaxEffect = () => {
    const parallax = document.querySelectorAll(".js-parallax");
    if (parallax.length) {
      parallax.forEach((parallax) => {
        let scale = parallax.dataset.scale;
        let orientation = parallax.dataset.orientation;

        new simpleParallax(parallax, {
          scale: scale,
          orientation: orientation,
          delay: 0.5,
          overflow: true,
          transition: "cubic-bezier(0,0,0,1)",
        });
      });
    }
  };

  const initCursor = () => {
    let clientX = -100;
    let clientY = -100;
    document.addEventListener("mousemove", (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    const render = () => {
      var innerCursor = document.querySelector(".cursor");
      innerCursor.style.transform = "translate(" + clientX + "px, " + clientY + "px)";
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    parallaxEffect();
    initCursor();
  }, []);

  return (
    <div className='page'>
      <Header />
      <Details />
      <Work />
      <div className='wrapper wrapper_gradient'>
        <Projects />
        <Reviews />
        <ContactForm />
      </div>
      <div className='cursor'></div>
    </div>
  );
};
