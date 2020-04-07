import React from 'react'

import classes from './SideDrawer.css'
import Logo from  '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Auxiliary from '../../../hoc/Auxiliary';
import BackDrop from '../../UI/Backdrop/Backdrop'


const sidedrawer =(props)=>{
    let handlesidedrawerclass =[classes.SideDrawer,classes.Close]
    if(props.showSideDrawer){
        handlesidedrawerclass =[classes.SideDrawer,classes.Open]
    }
    
    return(<Auxiliary>
        <BackDrop  
        show={props.showSideDrawer}
        cancled={props.closed}

        />
               
        <header className={handlesidedrawerclass.join(' ')}    onClick={props.closed}>
            {/* <div onClick={props.closed}>Close</div> */}
            <div className={classes.Logo}>
            <Logo />
            </div>
            <nav>
                
                <NavigationItems
                 isAuth={props.isAuth}
                />
            </nav>

        </header>
    </Auxiliary>)
}

export default sidedrawer