import * as actionTypes from './actionTypes'
import axios from '../../axios-order'

export const purchaseOrderSuccess = (id, orderData)=>{
    return{

        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
    }
}

export const purchaseOrderFail = (error)=>{
    return{

        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const purchaseBurgerStart = ()=>{
  return{
    type:actionTypes.PURCHASE_BURGER_START
  }
}

export const orderPurchase = (orderData, token)=>{
   return dispatch =>{
     dispatch(purchaseBurgerStart())
    axios.post('/orders.json?auth='+token,orderData)
    .then(Response=>{
      console.log(Response.data)
      dispatch(purchaseOrderSuccess(Response.data.name,orderData))
    })
    .catch(error =>{
      dispatch(purchaseOrderFail(error))
    });
   }
}

export const purchaseInit = ()=>{
  return{
    type:actionTypes.PURCHASE_INIT
  }
}

export const fatchOrderSucces =(order)=>{
  return{
    type:actionTypes.FETCH_ORDER_SUCCESS,
    order:order
  }
}

export const fatchOrderFail =(error)=>{
  return{
    type:actionTypes.FETCH_ORDER_FAIL,
    error:error
  }
}
export const fatchOrderStart =()=>{
  return{
    type:actionTypes.FETCH_ORDER_START
  }
}

export const fetchOrder =(token, userId)=>{
  return dispatch =>{
    dispatch(fatchOrderStart())
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('/orders.json' + queryParams)
              .then(res=>{
                  const fetchOrder =[]
                  for(let key in res.data){
                      fetchOrder.push({
                          ...res.data[key],
                          id:key

                      })
                  }
                  dispatch(fatchOrderSucces(fetchOrder))
                  
              })
              .catch(err=>{
                 dispatch(fatchOrderFail(err))
              })
  }
}