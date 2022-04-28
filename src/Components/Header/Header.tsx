import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'


function Header() {

    return (
        <div className={styles.items}>  
              <div>
                <NavLink to='/profile' > Profile </NavLink>
            </div>
            <div>
                <NavLink to='/login'  > login</NavLink>
            </div>
            <div >
                <NavLink to='/test' > test </NavLink>
            </div>
        </div>
    )
}

export default Header