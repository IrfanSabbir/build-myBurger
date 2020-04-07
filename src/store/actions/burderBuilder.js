import * as actionTypes from './actionTypes'

export const addIngredient = (name)=>{
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    }
}
export const removeIngredient = (name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
}

export const setIngredient = ()=>{
    return{
        type:actionTypes.SET_INGREDIENTS,
        ingredients:{
            cheese:0,
            meat: 0,
            salad:0,
            bacon:0
        },
        price:2
    }
}


