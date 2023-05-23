import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import css from "./Creados.module.css";
import Nav from "../../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import CardDetail from "../CardDetail/CardDetail.jsx";

const Creados = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    axios.get("http://localhost:3001/pokemondb").then((response) => {
      setPokemons(response.data.data);
    });
  }, []);

  return (
    <div className={css.section}>
      <Nav />
      <div className={css.pokedb}>
        <div className={css.create}>
          <Link to="/creados/new">Crear</Link>
        </div>
        <div className={css.db}>
          {/* {console.log(pokemons)} */}
          {Array.isArray(pokemons) &&
            pokemons.map(({ id, name, image }) => (
              <Card
                key={id}
                id={id}
                name={name}
                image={image}
                onOpenModal={() => {
                  handleOpenModal();
                  setSelectedPokemon({ name, image });
                }}
                onCloseModal={handleCloseModal}
              />
            ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedPokemon && (
            <CardDetail
              name={selectedPokemon.name}
              image={selectedPokemon.image}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Creados;
