import { configureStore } from '@reduxjs/toolkit' 
import cartReducer from '../Pages/Cart/CartSlice' 
import userReducer from '../Components/Form/Login/LoginForm/userSlice' 

const rootReducer = {
    cart: cartReducer,
    user: userReducer,
} 

const store = configureStore({
    reducer: rootReducer,
}) 

export default store 