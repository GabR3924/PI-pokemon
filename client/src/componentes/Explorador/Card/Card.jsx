import React, { useState } from 'react'
import css from './Card.module.css'


const Card = ({ name, image,types, onOpenModal}) => {

  return (
    <div className={css.section}>
        <img src={image} alt="" />
        <button onClick={onOpenModal}>{name}</button>

         <h2>Tipo: {types ? types.join(', ') : ''}</h2>
    </div>
  )
}

export default Card