import React from "react";
import css from './CardDetail.module.css'

const CardDetail = ({ id, name, image, vida, ataque, defensa,velocidad,altura,peso,types }) => {
  return (
    <div className={css.section}>
      <h1>{name} <br /> #{id}</h1>
      {/* <h3>{id}</h3> */}
      <img src={image} alt="" />
      <h2>vida <br />{vida}</h2>
      <h2>ataque  <br /> {ataque}</h2>
      <h2>defensa  <br /> {defensa}</h2>
      <h2>velocidad  <br /> {velocidad}</h2>
      <h2>altura  <br /> {altura}</h2>
      <h2>peso <br /> {peso}</h2>
      <h2>Tipo <br /> {types ? types.join(', ') : ''}</h2>
       
    </div>
  );
};

export default CardDetail;

       