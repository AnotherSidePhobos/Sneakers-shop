import * as types from "./typesActions";

export const getItems = () => {
    return{
        type: types.GET_ITEMS
    }
}
export const addToCart = (id) => dispatch =>  {
    debugger
    dispatch({
        type: types.ADD_ITEMS,
        payload: id
    })
}
export const deleteItem = (id) => dispatch => {

    dispatch({
        type: types.DELETE_ITEMS,
        payload:id
    
    })
   
}

export const increaseItem = (id) => dispatch => {

    dispatch({
        type: types.INCREASE_ITEMS,
        payload:id
    
    })
   
   }



export const decreaseItem = (id) => dispatch => {

    dispatch({
        type: types.DECREASE_ITEMS,
        payload:id
    
    })
   
   }

   export const getTotals = () => dispatch => {

    dispatch({
        type: types.TOTAL_ITEMS,
      
    })
   
   }




export const getDetails = () => dispatch => {

    dispatch({
        type: types.DETAILS,
      
    })
   
   }