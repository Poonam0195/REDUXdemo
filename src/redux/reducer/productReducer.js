import { ActionTypes } from "../contant/action-type";
const initialState = {
  product: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  console.log("state====", state);
  switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return {...state,product:payload};
        
        case ActionTypes.FETCH_PRODUCT:
          return {...state,product:payload};
  
    default:
      return state;
  }
  
}
export const SelectproductReducer =(state={},{type,payload}) =>{
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      return {...state, ...payload};
      case ActionTypes.REMOVE_SELECT_PRODUCT:
      return {};
  
    default:
      return state;
  }
}
