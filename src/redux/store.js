import { configureStore } from '@reduxjs/toolkit'
import { cartState } from './state/cart.state';
import { productState } from './state/product.state'

const Store = configureStore({
    reducer: {
        product: productState.reducer,
        cart: cartState.reducer,
    }
})

export default Store;