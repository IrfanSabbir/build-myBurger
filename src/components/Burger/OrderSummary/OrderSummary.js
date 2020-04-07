import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button'

const ordersummary=(props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey=>{
        return(
        <li key={igkey} >
            <span style={{textTransform:'capitalize'}}>{igkey}:{props.ingredients[igkey]} </span>
        </li>
        )
    })
    return(
        <Auxiliary>
            <h2>Your Order</h2>
            {ingredientSummary}
            total Price = {props.price.toFixed(2)}<br/>
            <Button clicked={props.cancleOrder} type={"Danger"}>Cancle</Button>
            <Button clicked={props.ContinueOrder} type={"Success"}>Continue</Button>

        </Auxiliary>

    )
}

export default ordersummary;