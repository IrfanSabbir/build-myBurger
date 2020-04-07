import * as actionType from '../actions/actionTypes'

const initialState = {
    order :[],
    loading :false,
    purchased:false,
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionType.PURCHASE_INIT:
            return{
                ...state,
                purchased:false
            }
        case actionType.PURCHASE_BURGER_START:
           return{
               ...state,
               loading:true
           }
        case actionType.PURCHASE_BURGER_SUCCESS:
            const newOrder={
                ...action.orderData,
                id:action.orderId
            }
            return{
               ...state,
               loading:false,
               purchased:true,
               order: state.order.concat(newOrder)
            }  
        
        case actionType.PURCHASE_BURGER_FAIL:
            return{
                ...state,
                loading:false
            }  
        case actionType.FETCH_ORDER_START:
            return{
                ...state,
                loading:true

            } 
        case actionType.FETCH_ORDER_SUCCESS:
            return{
                ...state,
                order:action.order,
                loading:false
            }     
        case actionType.FETCH_ORDER_FAIL:
            return{
                ...state,
              

            }      
        default :
            return state     
    }
}

export default reducer


