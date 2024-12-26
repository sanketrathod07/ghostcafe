import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding to cart:", action.payload);
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: 1 }); // Default quantity to 1
      }
      console.log("Updated cart state:", state.products);
    },      
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },    
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },    
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
