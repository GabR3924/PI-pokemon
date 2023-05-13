import React from "react";
import css from "./Info.module.css";

const info = () => {
  return (
    <div className={css.secction}>
      <div className={css.text}>
        <p>
          Pokémon es una franquicia de medios creada por Satoshi Tajiri y Ken
          Sugimori, que comenzó como un videojuego RPG para la consola Game Boy
          en 1996. Desde entonces, ha crecido en popularidad y se ha expandido a
          otros medios de entretenimiento como series de televisión, películas,
          juegos de cartas y ropa. El juego original consiste en personificar el
          papel de un entrenador de criaturas llamadas Pokémon, que deben ser
          capturadas y entrenadas para luchar contra otros entrenadores y sus
          Pokémon. La franquicia ha sido un éxito mundial y sigue siendo popular
          entre personas de todas las edades
        </p>
      </div>

      <div className={css.img}>
        <img src="../img/varios.jpg" alt="" />
      </div>
    </div>
  );
};

export default info;
