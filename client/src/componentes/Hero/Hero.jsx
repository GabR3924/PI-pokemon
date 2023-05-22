import React from "react";
import css from "./Hero.module.css";
import Nav from "../Nav/Nav";
import Info from "./Info/Info"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={css.section}>
      <Nav />
      <div className={css.hero}>
        <div className={css.landing}>POKEMON</div>
        <div className={css.img}></div>
        <div className={css.img2}></div>
        <div className={css.button}>
          <button><Link to='/home'>Home</Link></button>
        </div>
      </div>
      {/* <Info/> */}
    </div>
  );
};

export default Hero;
