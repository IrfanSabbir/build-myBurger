import React, { Component } from 'react';
 import Layout from  './container/Layout/Layout'
 import{Route, Switch, withRouter, Redirect} from 'react-router-dom'
 import {connect} from 'react-redux' 
 import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
 import Checkout from './container/Checkout/Checkout'
 import Orders from './container/Orders/Orders'
 import Auth from './container/Auth/Auth'
 import Logout from './container/Auth/Logout/Logout'
import * as action from './store/actions/index'

class App extends Component {
  
  componentDidMount(){
     this.props.onAucthCheck()
  }
  render() {
    let routes = (<Switch>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/" exact component={BurgerBuilder}/>
                    <Redirect to="/" />
                  </Switch>)

    if(this.props.isAuth){
      routes=(<Switch>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/order" component={Orders}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/auth" component={Auth}/>

                <Route path="/" exact component={BurgerBuilder}/>
                <Redirect to="/" />
          </Switch>)
    }      
    
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
       
      </div>      
    );
  }
}

const mapStateToProps = state =>{
  return{
    isAuth : state.auth.token !== null

  }
} 
const mapDispatchToProps = dispatch=>{
  return{
    onAucthCheck : ()=>dispatch(action.authcheck())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
 
