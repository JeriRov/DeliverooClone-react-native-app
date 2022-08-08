import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  restaurant: {
    id: string;
    imgUrl: any;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: any[];
  };
}

const initialState: CounterState = {
  restaurant: {
    id: '',
    imgUrl: null,
    title: '',
    rating: 0,
    genre: '',
    address: '',
    short_description: '',
    dishes: [],
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
