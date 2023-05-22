import React from 'react'
import css from './Nav.module.css'
import {MdOutlineCatchingPokemon} from 'react-icons/md'


const Nav = () => {
  return (<>
    <div className={css.nav}> 
    <div>
        <div className={css.logo}><MdOutlineCatchingPokemon className={css.icon}/>Pokemon</div>
      
    </div>
    <ul className={css.list}>
        <li>Home</li>
        <li>Creados</li>
        
    </ul>
    </div>
    </>
  )
}

export default Nav