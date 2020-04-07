import  React,{ Component } from "react";
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

class ContactData extends Component{
    state={
        name:'',
        email:'',
        street:'',
        postalCode:'',
        delevery:'fastest',
        // loading:false
    }
    orderHandler=(event)=>{
        event.preventDefault();
          this.setState({loading:true})
          const order ={
           ingredients: this.props.ingredients,
           price :this.props.price,
           userId:this.props.userId,
           customer:{
               name: this.state.name,
               email:this.state.email,
              
               address:{
                   street: this.state.street,
                   zipcode:this.state.postalCode,
                   country:'Bangladesh'

               }
           },
           deliveryMethod:this.state.delevery
       }

       this.props.onPurchaseOrder(order, this.props.token)
    }
    render(){
        let form=(<form>
                <h1>Fill Up additional information</h1>
                {/* <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} /> */}
            
            <label><input type="text" name="name" placeholder="Enter Name"  
                        value={this.state.name}
                        onChange={(event) => this.setState({name: event.target.value})}
                    /> 
            </label>
            <label><input type="text" name="email" placeholder="j@s.com"  
                        value={this.state.email}
                        onChange={(event) => this.setState({email: event.target.value})}
                    /> 
            </label>
            <label><input type="text" name="street" placeholder="Enter Street"  
                        value={this.state.street}
                        onChange={(event) => this.setState({street: event.target.value})}
                    /> 
            </label>
            <label><input type="number" name="postal" placeholder="Enter Postal Code"  
                        value={this.state.postalCode}
                        onChange={(event) => this.setState({postalCode: event.target.value})}
                    /> 
            </label>
            <label><select value={this.state.delevery} onChange={(event) => this.setState({delevery: event.target.value})}>
                    <option value="fastest">Fastest</option>
                    <option value="slowest">Slowest</option>
                </select> </label>
           
            <Button type="Success" clicked={this.orderHandler} >Order</Button>
        </form>)
        if(this.props.loading){
            form =<Spinner />
        }

        return(
            <div className={classes.Contact}>
            
                {form}
            </div>
        )
    }

}
const mapStateToProps = state=>{
    return{
        ingredients:state.burger.ingredients,
        price:state.burger.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId: state.auth.userId

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onPurchaseOrder:(data, token)=>dispatch(actions.orderPurchase(data,token)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData)