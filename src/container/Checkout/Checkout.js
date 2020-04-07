import React,{Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import CheckoutSummary from '../../components/Burger/Order/CheckoutSummary/CheckoutSummary'


import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'


class Checkout extends Component{

    // constructor(props){
    //     super(props)
    //     const query = new URLSearchParams(this.props.location.search)
    //     const ingredients ={}
    //     let price=0
    //     for(let params of query.entries()){
    //         if(params[0]=== 'price'){
    //             price= params[1];
    //         }

    //         else{
    //         ingredients[params[0]] = +params[1]

    //         }
            
    //     }
    //     this.state={ingredients:ingredients, totalPrice:price}
    // }
    
    // state ={
    //     ingredients:null,
    //     totalPrice:0,
        

    // }
    // componentDidMount=()=>{
    //     const query = new URLSearchParams(this.props.location.search)
    //     const ingredients ={}
    //     for(let params of query.entries()){
    //         ingredients[params[0]] = +params[1]
           
    //     }
    
    //     this.setState({ingredients:ingredients})
    // }
   
    checkoutContinuedHandler=()=>{

        this.props.history.replace('/checkout/contact-data')

    }
    checkoutCancledHandler=()=>{
        this.props.history.goBack()

    }
  
    render(){

         let summary = <Redirect to="/"/>

         if(this.props.ings){
            const redirect = this.props.purchased? <Redirect to="/"/> : null
            summary= <div>
                {redirect}
                <CheckoutSummary 
                
                checkoutCancled={this.checkoutCancledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                ingredients={this.props.ings}
                />
                 <Route 
                 path={this.props.match.path + '/contact-data'} 
                 component={ContactData}
                 />
             </div>

         }
        
        return(
            <div>
                
             {summary}
            </div>
        )
    }

}

const mapStateToProps = state=>{
    return{
        ings:state.burger.ingredients, 
        price:state.burger.totalPrice,
        purchased: state.order.purchased

    }
}

export default connect(mapStateToProps)(Checkout);