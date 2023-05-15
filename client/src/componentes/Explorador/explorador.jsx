import React from 'react'
import css from "./explorador.module.css"
import Nav from '../Nav/Nav'
import Buscador from './Buscador/Buscador'
import Cards from './Cards/Cards'

const explorador = ({ onSearch, results }) => {
  return (
    <div className={css.section}>
        <Nav/>
        <div className={css.explorador}>
        <Buscador onSearch = {onSearch}/>
        <Cards results = {results}/>
        </div>
    </div>
  )
}

export default explorador