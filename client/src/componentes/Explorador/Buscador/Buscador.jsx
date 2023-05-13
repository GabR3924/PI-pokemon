import React from "react";
import css from "./buscador.module.css";

const Buscador = () => {
  return (
    <div className={css.section}>
      <div className={css.buscador}>
        <form>
          <input type="text" placeholder="Buscar..." />

          <div className={css.options}>
            <button type="button">Todos</button>
            <button type="button">Fuego</button>
            <button type="button">Agua</button>
          </div>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default Buscador;
