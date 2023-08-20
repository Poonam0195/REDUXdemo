import {combineReducers} from 'redux'
import { productReducer ,SelectproductReducer} from './productReducer'

const reducer=combineReducers({
   allProduct: productReducer,
   product:SelectproductReducer
})
export default reducer;