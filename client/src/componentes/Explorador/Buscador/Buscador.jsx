import React, { useState } from 'react';
import css from './buscador.module.css';

const Buscador = ({ onSearch, page, setPage }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    setPage(1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.section}>
      <div className={css.buscador}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <div className={css.options}>
            <button type="button">Todos</button>
            <button type="button">Fuego</button>
            <button type="button">Agua</button>
          </div>
          <button type="submit">Buscar</button>
        </form>

        <div className={css.page}>
          <button onClick={handlePreviousPage}>Previous page</button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default Buscador;


