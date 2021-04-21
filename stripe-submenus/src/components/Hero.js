import React from "react";
import phoneImg from "../images/phone.svg";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita enim commodi aspernatur tempore pariatur, dolore
            perspiciatis quibusdam laborum repudiandae?
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-image">
          <img src={phoneImg} className="phone-img" alt="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
