import React from 'react'
import css from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({ name, image,types}) => {
  return (
    <div className={css.section}>
        <img src={image} alt="" />
         <h1> <Link to='/card/detail'>{name}</Link></h1>
         <h2>Tipo: {types ? types.join(', ') : ''}</h2>
    </div>
  )
}

export default Card