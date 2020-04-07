import React, {Component} from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from  '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
// import axios from '../../axios-order'

import {connect} from 'react-redux'
import * as action from '../../store/actions/index'



class BurgerBuilder extends Component{
    constructor(props) {
      super(props)

      props.onSetIngredients()
    }
    state ={
 
        purchasable : false,
        purchasing: false,
        loading :false,

    }
    

    updatePurchaseState(ingredient){
       
        const sum =  Object.keys(ingredient)
                      .map(type=>{
                          return ingredient[type]
                      })
                      .reduce((sum,el)=>{
                          return sum+el
                      },0)
                   
       return sum>0

    }
   
    purchaseHandler=()=>{
        if(this.props.isAuth){
            this.setState({purchasing:true})
        }   
        else{
            this.props.onauthRedirect('/checkout')
            this.props.history.push('/auth')
        } 
      

    }
    orderCancleHandler =()=>{
        this.setState({purchasing:false})
    }
    orderContinueeHandler =()=>{
    
         this.props.onPurchased()    
         this.props.history.push('/checkout')
    
    }
   
    render(){
        const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary =   <OrderSummary
                                cancleOrder={this.orderCancleHandler}
                                ContinueOrder={this.orderContinueeHandler}
                                ingredients={this.props.ings}
                                price={this.props.price}
                                />
      
        if(this.state.loading ){
           
            orderSummary = <Spinner/>
        }   
      
                         
        return(
           <Auxiliary>
            
               <Modal show={this.state.purchasing} cancleModal={this.orderCancleHandler}>
                 {orderSummary}
               </Modal>
               <Burger ingredients = {this.props.ings}/>
               <BuildControls 
               price={this.props.price}
               addIngredient ={this.props.onAddIngredients}
               removeIngredient ={this.props.onRemoveIngredients}
               disabled ={disabledInfo}
               purchasable={this.updatePurchaseState(this.props.ings)}
               ordered={this.purchaseHandler}
               ingredients={this.props.ings}
               />
             
           </Auxiliary>
        )
    }
}

const mapStateToProps = state=>{
     return{
         ings:state.burger.ingredients,
         price:state.burger.totalPrice,
         isAuth:state.auth.token !== null,
         userId: state.auth.userId

     }
}

const mapDispatchToProps = dispatch =>{
    return{
        onAddIngredients:(igname)=>dispatch(action.addIngredient(igname)),
        onRemoveIngredients:(igname)=>dispatch(action.removeIngredient(igname)),
        onSetIngredients:()=>dispatch(action.setIngredient()),
        onPurchased: ()=>dispatch(action.purchaseInit()),
        onauthRedirect: (path)=>dispatch(action.authredirectpath(path))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);