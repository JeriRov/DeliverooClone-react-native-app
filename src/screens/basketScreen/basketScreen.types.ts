import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface BasketItem {
  id: number;
  image?: string;
  name: string;
  price: number;
}
export type RootStackParamList = {
  PreparingOrder: undefined;
  Settings: undefined;
};

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'PreparingOrder'
>;
export interface Dish {
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
}

export interface GroupedItems {
  id: string;
  dishes: Dish[];
}
