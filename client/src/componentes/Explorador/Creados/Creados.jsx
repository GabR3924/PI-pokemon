import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import css from "./Creados.module.css";
import Nav from "../../Nav/Nav.jsx";
import { Link } from "react-router-dom";

const Creados = () => {
  const [pokemons, setPokemons] = useState([]);

  // Este llamado se ejecutará solo una vez, cuando el componente se monte
  useEffect(() => {
    axios.get("http://localhost:3001/pokemondb").then((response) => {
      setPokemons(response.data.data);
    });
  }, []);

  return (
    <div className={css.section}>
      <Nav />
      <div><Link to='/creados/new'>Crear</Link></div>
      <div>
        {console.log(pokemons)}
        {Array.isArray(pokemons) &&
          pokemons.map(({ id, name, image }) => (
            <Card key={id} id={id} name={name} image={image} />
          ))}
      </div>
    </div>
  );
};

export default Creados;
