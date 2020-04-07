import React from 'react'
import classes from './BuildControls.css'
import BuilControl from './BuildControl/BuildControl'
import { connect} from 'react-redux'

const controls = [
    {label : "Salad" ,type : "salad"},
    {label : "Meat" ,type : "meat"},
    {label : "Cheese" ,type : "cheese"},
    {label : "Bacon" ,type : "bacon"}
]

const  builControls =(props)=>(

    <div className ={classes.BuilControls}>
         <div> <strong>Total Price : {props.price.toFixed(2)} </strong></div>
         
    {controls.map(control=>
      
        <BuilControl 
          key={control.label}
          label ={control.label}
          added ={()=>props.addIngredient(control.type)}
          removed ={()=>props.removeIngredient(control.type)}
          disabled={props.disabled[control.type]}
          ingQuantity={props.ingredients[control.type]}
          

          />
          
    )}
    
        <button  className={classes.OrderButton}  
        disabled={!props.purchasable}
        onClick={props.ordered}> {props.isAuth?'Order Now' : 'Log in to Continue'}
        </button>
        
    

</div>

)
const mapStateToProps = state=>{
    return{
       
        isAuth:state.auth.token !== null

    }
}    

export default connect(mapStateToProps)(builControls)