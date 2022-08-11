import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface Dish {
  id: string;
  price: number;
  image?: string;
}

export interface BasketState {
  items: Dish[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item: Dish) => item.id === action.payload.id,
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as it's not in basket!`,
        );
      }
      state.items = newBasket;
      console.log(typeof 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state.basket.items.filter((item: Dish) => item.id === id);

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total: number, item: Dish) => (total += item.price),
    0,
  );

export default basketSlice.reducer;
