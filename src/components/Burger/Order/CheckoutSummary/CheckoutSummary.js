import React  from 'react'
import Burger from '../../Burger'
import classes from './CheckoutSummary.css'
import Button from '../../../UI/Button/Button'

const checkoutSummary =(props)=>{
    return(
        <div className={classes.Checkout}>
         
            <h1>Enjoy the Burger!</h1>
            <div style={{width:"300px", margin:"auto"}}>
                <Burger 
                   ingredients={props.ingredients}
                />
           
            </div>
            <Button type="Danger" clicked={props.checkoutCancled}>Cancle</Button>
            <Button type="Success" clicked={props.checkoutContinued}>Continue</Button>
          
        </div>
    )
}

export default checkoutSummary