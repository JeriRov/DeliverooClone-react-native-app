import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export interface ReastaurantState {
  restaurant: {
    id: string;
    imgUrl?: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    lat: number;
    long: number;
    dishes: string[];
  };
}

const initialState: ReastaurantState = {
  restaurant: {
    id: '',
    imgUrl: '',
    title: '',
    rating: 0,
    genre: '',
    address: '',
    lat: 0,
    long: 0,
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

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
