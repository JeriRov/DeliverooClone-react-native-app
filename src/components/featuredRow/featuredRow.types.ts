import {Category} from '../../screens/homeScreen/homeScreen.types';
import {Dish} from '../restaurantCard/restaurantCard.types';

export interface Props {
  id: string;
  title: string;
  description: string;
}

export interface Restaurant {
  _id: string;
  name: string;
  short_description: string;
  image: string;
  lat: number;
  long: number;
  address: string;
  rating: number;
  type: Category;
  dishes: Dish[];
}
