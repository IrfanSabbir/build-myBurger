import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import { connect} from 'react-redux'
import classes from './Auth.css'
import Button from '../../components/UI/Button/Button'
import * as action from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Auth extends Component{
    state={
        email:'',
        password:'',
        isLogin:true
    }
    componentDidMount (){
        if(!this.props.burgerBuilding && this.props.authRedirect !== '/'){
            this.props.onauthRedirect()
        }
    }
    authHandler =(event)=>{
        event.preventDefault();
       
        this.props.onAuth(this.state.email, this.state.password,this.state.isLogin)
    }
    
    SwitchSignHandler=()=>{
        this.setState(prevState=>{
            return{isLogin:!prevState.isLogin}
        })
    }

    render(){
        let form=(<form>
           
        <label><input type="text" name="email" placeholder="Enter email"  
                    value={this.state.email}
                    onChange={(event) => this.setState({email: event.target.value})}
                /> 
        </label>
        <label><input type="text" name="password" placeholder="*******"  
                    value={this.state.password}
                    onChange={(event) => this.setState({password: event.target.value})}
                /> 
        </label>
        <Button type="Success" clicked={this.authHandler} >{!this.state.isLogin?'Sign Up' : 'Log in'}</Button>
    </form>)
        if(this.state.loading){
            form=<Spinner />
        }
        let errorMessage=null
        if(this.props.error){
            errorMessage=(
                <p>{this.props.error.message}</p>
            )
        }
        let authRedirect = null
        if(this.props.isAuth){
            authRedirect =<Redirect to={this.props.authRedirect}/>
        }

        return(
            <div className={classes.Auth}>
                {authRedirect}
                 <h1>Please  {!this.state.isLogin?'Sign Up' : 'Log in'}</h1>
                {errorMessage}
                {form}
                <Button type="Danger" clicked={this.SwitchSignHandler} >
                    {this.state.isLogin?'Sign Up' : 'Log in'}
                </Button>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
       
        loading:state.auth.loading,
        error:state.auth.error,
        isAuth:state.auth.token !== null,
        burgerBuilding: state.burger.building,
        authRedirect: state.auth.authRedirect

    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onAuth: (email,password,isLogin)=>dispatch(action.auth(email,password,isLogin)),
        onauthRedirect: ()=>dispatch(action.authredirectpath("/"))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)