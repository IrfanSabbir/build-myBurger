import * as actionType from './actionTypes'
import axios from 'axios'
export const authstart =()=>{
    return{
        type:actionType.AUTH_START
    }
}
export const authsuccess =(token, userId)=>{
    return{
        type:actionType.AUTH_SUCCESS,
        token:token,
        userId:userId
    }
}
export const authfail =(error)=>{
    return{
        type:actionType.AUTH_FAIL,
        error:error
    }
}
export const logout =()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('userId')
  return{
      type:actionType.LOG_OUT
  }
}
export const checkauthtimeout =(expiredIn)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        },expiredIn*1000)
    }
}
export const auth =(email, password, isLogin)=>{
    return dispatch=>{
        dispatch(authstart())
        const signinData ={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVD8mwJ8oYtUB1jjTqMjpeDNNb8VGwhr0"
        if(isLogin){
            url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVD8mwJ8oYtUB1jjTqMjpeDNNb8VGwhr0"
        }
       
        axios.post(url,signinData)
             .then(response =>{
                 const expiresIn = new Date(new Date().getTime() + response.data.expiresIn*1000)
                 localStorage.setItem('token',response.data.idToken)
                 localStorage.setItem('userId', response.data.localId)
                 localStorage.setItem('expiresIn', expiresIn)
                 dispatch(authsuccess(response.data.idToken, response.data.localId))
                 dispatch(checkauthtimeout(response.data.expiresIn))
             })
             .catch(error=>{
                 dispatch(authfail(error.response.data.error))
             })
    }
}

export const authredirectpath = (path)=>{
    return{
        type:actionType.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const authcheck = ()=>{
    return dispatch=>{
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }
        else{
            const expiresIn= new Date(localStorage.getItem('expiresIn'))
            if(expiresIn <= new Date()){
                dispatch(logout())
            }
            else{
                 const userId = localStorage.getItem('userId')
                dispatch(authsuccess(token, userId))
                dispatch(checkauthtimeout((expiresIn.getTime() - new Date().getTime()) /1000))
            }
        }

    }
}