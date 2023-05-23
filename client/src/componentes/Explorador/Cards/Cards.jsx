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
        {results &&
          results.pokemons.map(({ id, name, image, height, weight, types }) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              height={height}
              weight={weight}
              types={types}
              onOpenModal={() => {
                handleOpenModal();
                setSelectedPokemon({ name, image, types });
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
            types={selectedPokemon.types}
          />
        )}
      </Modal>
    </div>
  );
};

export default Cards;
