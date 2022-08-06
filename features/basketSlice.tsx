import { createSlice, Draft } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: any[]
}

const initialState: CounterState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: any) => state.basket.items;

export default basketSlice.reducer
