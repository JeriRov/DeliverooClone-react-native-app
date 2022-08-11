import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Restaurant: Props;
  Settings: undefined;
};

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Restaurant'
>;

export interface Dish {
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
}

export interface Props {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  long: number;
  lat: number;
}
