import { createSlice } from "@reduxjs/toolkit";

const CartEmptyState = {
  products: []
};

export const cartState = createSlice({
  name: "cart",
  initialState: CartEmptyState,
  reducers: {
    _handleProductCart: (state, action) => {
        return {...state, products: action.payload}
    }
  }
});

export const { _handleProductCart } = cartState.actions;
