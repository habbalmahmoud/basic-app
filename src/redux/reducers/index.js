import  {combineReducers} from 'redux'
import { productReducer } from './productReducer'
import { selectedProductDetail } from './productReducer'

const reducers = combineReducers({
    allproducts: productReducer,
    product: selectedProductDetail,
})


export default reducers