import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngedients/BurgerIngredients'

const burger =(props)=>{
   let transformedIngredients  = []
  //  if(props.ingredients.cheese === 0  && 
  //   props.ingredients.meat === 0 &&
  //   props.ingredients.salad === 0 &&
  //   props.ingredients.bacon === 0
  //   )
  //   {
  //       transformedIngredients=<p>Continue Ading Ingredients</p>
  //  }

  //  else{
       transformedIngredients = Object.keys(props.ingredients)
          .map((ingredient,index) =>{
              let length = props.ingredients[ingredient]
              let ingredientArray = [...Array(length)]
              return (
                ingredientArray.map((data,index)=>{
                   return <BurgerIngredients type ={ingredient}  key ={ingredient+ index}/>
                  })
              )
          })
          .reduce((arr,  el)=>{
           return arr.concat(el)
          })

          if(transformedIngredients.length === 0){
            transformedIngredients = <p>Continue Adding Ingredients</p>
          }
          
          
          
   return(
       <div  className={classes.Burger}>
           <BurgerIngredients type ="bread-top"/>
           {transformedIngredients}
           <BurgerIngredients type ="bread-bottom"/>
          
       </div>
   )
}
 
export default withRouter(burger)
