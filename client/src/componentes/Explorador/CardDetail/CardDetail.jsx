import React from "react";

const CardDetail = ({ name, image, vida, ataque, defensa,velocidad,altura,peso,types }) => {
  return (
    <>
      <div>CardDetail</div>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <h2>vida:{vida}</h2>
      <h2>ataque:{ataque}</h2>
      <h2>defensa:{defensa}</h2>
      <h2>velocidad:{velocidad}</h2>
      <h2>altura:{altura}</h2>
      <h2>peso:{peso}</h2>
      <h2>types:{types}</h2>
    </>
  );
};

export default CardDetail;

       