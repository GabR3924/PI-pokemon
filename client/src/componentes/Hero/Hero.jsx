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
        <div className={css.img}></div>
        <div className={css.button}>
          <button><Link to='/explorar'>Explorar</Link></button>
        </div>
      </div>
      <Info/>
    </div>
  );
};

export default Hero;
