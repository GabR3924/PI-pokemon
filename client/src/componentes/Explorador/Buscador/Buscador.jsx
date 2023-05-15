import React, { useState } from "react";
import css from "./buscador.module.css";

const Buscador = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <div className={css.section}>
      <div className={css.buscador}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={event => setQuery(event.target.value)}
          />

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

