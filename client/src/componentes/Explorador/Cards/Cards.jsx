import React, { useState } from "react";
import css from "./Cards.module.css";
import Card from "../Card/Card.jsx";
import Modal from "../Modal/Modal";
import CardDetail from '../CardDetail/CardDetail'

const Cards = ({ results }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={css.section}>
      <div className={css.Cards}>
        {console.log(results)}
        {results && results.pokemons &&
          results.pokemons.map(({ id, name, image,life, attack,defense, speed, height, weight, types }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              types={types}
              onOpenModal={() => {
                handleOpenModal();
                setSelectedPokemon({ id, name, image,life, attack,defense, speed, height, weight, types });
              }}
              onCloseModal={handleCloseModal}
            />
          ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPokemon && (
          <CardDetail
            id={selectedPokemon.id}
            name={selectedPokemon.name}
            image={selectedPokemon.image}
            vida={selectedPokemon.life}
            ataque={selectedPokemon.attack}
            defensa={selectedPokemon.defense}
            velocidad={selectedPokemon.speed}
            altura={selectedPokemon.height}
            peso={selectedPokemon.weight}
            types={selectedPokemon.types}
          />
        )}
      </Modal>
    </div>
  );
};

export default Cards;
