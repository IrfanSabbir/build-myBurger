import React from  'react'
import {NavLink} from 'react-router-dom'
import classes from './Navigationitem.css'
const navigationitem =(props)=>(
    <li className={classes.Navigationitem}>
        <NavLink to={props.link}
         activeClassName={classes.active}
         exact={props.exact}
        >
             {props.children}
         </NavLink>

    </li>

)

export default navigationitem