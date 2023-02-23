import { createSlice } from "@reduxjs/toolkit";

const ProductsEmptyState = {
  products: [],
  isLoading: true,
};

export const productState = createSlice({
  name: "products",
  initialState: ProductsEmptyState,
  reducers: {
    _setProducts: (state, action) => {
      return { ...state, products: action.payload };
    }
  },
});

export const { _setProducts } = productState.actions;
