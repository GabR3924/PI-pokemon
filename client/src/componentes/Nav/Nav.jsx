import React from 'react'
import css from './Nav.module.css'
import {SiPokemon} from 'react-icons/si'


const Nav = () => {
  return (<>
    <div className={css.nav}> 
    <div>
        <h1><SiPokemon className={css.icon}/></h1>
    </div>
    <ul className={css.list}>
        <li>Home</li>
        <li>Explorar</li>
        <li>Registrarte</li>
        <li>Entrar</li>
    </ul>
    </div>
    </>
  )
}

export default Nav