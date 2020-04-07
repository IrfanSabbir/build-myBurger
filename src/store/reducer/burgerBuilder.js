import * as actionType from '../actions/actionTypes'

const initialState = {
    ingredients:{
          
        cheese:0,
        meat: 0,
        salad:0,
        bacon:0
    },
    totalPrice:2,
    building:false
   
}

const Ingredients_Price ={ 
    meat: 1.3,
    cheese:0.5,
    salad:0.6,
    bacon:1
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
    
        case actionType.ADD_INGREDIENT :
           
            return{
                
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1
                },
                totalPrice:state.totalPrice+ Ingredients_Price[action.ingredientName],
                building:true
                
            }
        case actionType.REMOVE_INGREDIENT :
            console.log(state.totalPrice>2)
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]-1
                },
                totalPrice:state.totalPrice - Ingredients_Price[action.ingredientName],
                building:true 
                
            }
       case actionType.SET_INGREDIENTS:
            return{
                ...state,
                ingredients:action.ingredients,
                totalPrice:2,
                building:false
            }     
        default:
            return state         
    }

}
export default reducer;