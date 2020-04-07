import React from  'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './Navigationitems.css'
const navigationitems =(props)=>(
    <ul  className={classes.Navigationitems}>
        <NavigationItem link="/" exact >Burger Builder</NavigationItem>
       {props.isAuth? <NavigationItem link="/order" > Order</NavigationItem>:null}
        {props.isAuth?
           <NavigationItem link="/logout" > Log Out</NavigationItem>:
           <NavigationItem link="/auth" > Sign In</NavigationItem>  }
    </ul>

)

export default navigationitems