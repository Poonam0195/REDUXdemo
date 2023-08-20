import fackStoreApi from '../../Apis/fackStoreApi'
import { ActionTypes } from "../contant/action-type"

export const fetchProducts =  () => {
    return async (dispatch)=>{
        const responce = await fackStoreApi.get("/products");
        dispatch({ type:ActionTypes.FETCH_PRODUCT,
            payload:responce.data})
    }  
}
export const fetchProduct =  (id) => {
    return async (dispatch)=>{
        const responce = await fackStoreApi.get(`/products/${id}`);
        dispatch({ type:ActionTypes.SELECT_PRODUCT,
            payload:responce.data})
    }  
}
export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectProducts = (product) =>{
    return {
        type:ActionTypes.SELECT_PRODUCT,
        payload:product,
    }
}
export const removeselectProducts = () =>{
    return {
        type:ActionTypes.REMOVE_SELECT_PRODUCT,
    
    }
}