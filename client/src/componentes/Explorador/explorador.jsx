import React from 'react'
import css from "./explorador.module.css"
import Nav from '../Nav/Nav'
import Buscador from './Buscador/Buscador'
import Cards from './Cards/Cards'

const explorador = () => {
  return (
    <div className={css.secction}>
        <Nav/>
        <div className={css.explorador}>
        <Buscador/>
        <Cards/>
        </div>
    </div>
  )
}

export default explorador