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

  const handleDeletePokemon = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/pokemon/${id}`);
      setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePokemon = async (id, updates) => {
    try {
      const response = await axios.put(`http://localhost:3001/pokemon/${id}`, updates);
      setPokemons(pokemons.map((pokemon) => pokemon.id === id ? response.data : pokemon));
      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.section}>
      <Nav />
      <div className={css.pokedb}>
        <div className={css.create}>
          <button onClick={handleOpenCreateModal}>Crear</button>
        </div>
        <div className={css.db}>
          {Array.isArray(pokemons) &&
            pokemons.map(({ id, name, image, vida, ataque, defensa, velocidad, altura, peso }) => (
              <Card
                key={id}
                id={id}
                name={name}
                image={image}
                onOpenModal={() => {
                  handleOpenModal();
                  setSelectedPokemon({ id, name, image, vida, ataque, defensa, velocidad, altura, peso });
                }}
                onCloseModal={handleCloseModal}
              />
            ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedPokemon && (
            <>
              <CardDetail
              id={selectedPokemon.id}
                name={selectedPokemon.name}
                image={selectedPokemon.image}
                vida={selectedPokemon.vida}
                ataque={selectedPokemon.ataque}
                defensa={selectedPokemon.defensa}
                velocidad={selectedPokemon.velocidad}
                altura={selectedPokemon.altura}
                peso={selectedPokemon.peso}
              />
              <button onClick={() => handleDeletePokemon(selectedPokemon.id)}>Eliminar</button>
              <button onClick={() => handleUpdatePokemon(selectedPokemon.id)}>Actualizar</button>
            </>
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
