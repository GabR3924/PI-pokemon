import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import css from "./Creados.module.css";
import Nav from "../../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import CardDetail from "../CardDetail/CardDetail.jsx";
import Crear from "../Crear/Crear";

const Creados = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenCreateModal = () => setIsCreateModalOpen(true);
  const handleCloseCreateModal = () => setIsCreateModalOpen(false);

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
          <button onClick={handleOpenCreateModal}>Crear</button>
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
        <Modal isOpen={isCreateModalOpen} onClose={handleCloseCreateModal}>
          <Crear />
        </Modal>
      </div>
    </div>
  );
};

export default Creados;
