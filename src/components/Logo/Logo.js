import React from 'react'

import classes from './Logo.css'

import BurgerLogo from '../../assets/Images/burger-logo.png'
const logo =()=>(
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="Burger Logo" />
         
    </div>
)

export default logo