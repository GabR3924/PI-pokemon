import React from 'react'
import css from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({id, name, image, height, weight, types}) => {
  return (
    <div className={css.section}>
        <h2>id:{id}</h2>
         <h2> <Link to='/card/detail'>{name}</Link></h2>
         <img src={image} alt="" />
         <h2>height:{height}</h2>
         <h2>weight:{weight}</h2>
         <h2>types:{types}</h2>
    </div>
  )
}

export default Card