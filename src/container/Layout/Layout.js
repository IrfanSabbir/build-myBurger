import React, { Component } from 'react'
import {connect } from 'react-redux'

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer :false,
    }
    cancleSideDrawerHandler=()=>{
        this.setState({showSideDrawer:false})

    }
    showSideDrawerHandler =()=>{

        this.setState((prestate)=>{
            return{showSideDrawer:!prestate.showSideDrawer}
        })
      

    }
    render(){
        return(
       
            <Auxiliary>
                <Toolbar 
                isAuth={this.props.isAuth}
                opened ={this.showSideDrawerHandler}
                />
                <SideDrawer
                   showSideDrawer={this.state.showSideDrawer}
                   isAuth={this.props.isAuth}
                   closed={this.cancleSideDrawerHandler}
                   opened ={this.showSideDrawerHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
    
            </Auxiliary>
            
        )

    }
    
}

const mapStateToPorps = state =>{
return{
       isAuth:state.auth.token !==null
  }
}

export default connect(mapStateToPorps)(Layout);