import React from 'react'
import classes from './Order.css'

const order =(props)=>{
    const ingredientsName =[]
    for(let ingredient in props.ingredients){
        ingredientsName.push({
            name:ingredient,
            amount:props.ingredients[ingredient]
        })
    }
    const outputIngredient = ingredientsName.map(ig=>(
        <span style={{border:'2px solid rgb(224, 224, 224)',padding:'2px' ,margin:'0 8px'}}
          key={ig.name} >
            {ig.name} ({ig.amount}) ,
           
        </span>
    ))
    return(
    <div className={classes.Order}>
        <p>{outputIngredient}</p>
        <p>total Price = <strong>{props.price.toFixed(2)}</strong> </p>

    </div>
)
}

export default order