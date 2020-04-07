import React,{ Component } from "react";
import Order from '../../components/Burger/Order/Order'
import {connect} from 'react-redux'
import * as action from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'


class Orders extends Component{
    constructor(props){
        super(props)
        props.onFetchOrder(this.props.token,this.props.userId)
    }
    
    render(){
        let orders = <Spinner />
        if(!this.props.loading ){
            orders=(this.props.order.map(order=>(
              <Order 
                ingredients={order.ingredients}
                price={+order.price}
                key={order.id}
              />
            )) )
             
         
        }
        return(
            <div>
                {orders}

            </div>
             
             )
    }

}

const mapStateToProps = state =>{
    return{
        order:state.order.order,
        loading:state.order.loading,
        token:state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchtoProps =dispatch=>{
    return{
        onFetchOrder : (token,userId)=>dispatch(action.fetchOrder(token,userId))
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Orders)