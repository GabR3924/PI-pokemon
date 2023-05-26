import React from 'react'
import css from './Nav.module.css'
import {MdOutlineCatchingPokemon} from 'react-icons/md'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (<>
    <div className={css.nav}> 
    <div>
        <div className={css.logo}><MdOutlineCatchingPokemon className={css.icon}/>Pokemon</div>
      
    </div>
    <ul className={css.list}>
        <li><Link to='/home'>home</Link></li>
        <li><Link to='/creados'>Creados</Link></li>
        
    </ul>
    </div>
    </>
  )
}

export default Nav