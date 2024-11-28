import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Redux toolkit uses immer BTS
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
    // RTK says either mutate the state or return the new state
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItemm, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
