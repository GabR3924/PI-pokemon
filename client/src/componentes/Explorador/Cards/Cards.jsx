import React from 'react'
import css from './Cards.module.css'
import Card from '../Card/Card.jsx'

const Cards = ({ results }) => {
  return (
    <div className={css.section}>
      <div className={css.Cards}>
        {console.log(results)}
        {results && results.pokemons.map(({ id, name, image, height, weight }) => (
          <Card
            key={id}
            id={id}
            name={name}
            image={image}
            height={height}
            weight={weight}
          />
        ))}
      </div>
    </div>
  )
}

export default Cards
