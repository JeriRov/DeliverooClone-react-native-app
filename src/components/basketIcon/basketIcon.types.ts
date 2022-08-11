import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Basket: undefined;
  Settings: undefined;
};

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Basket'
>;
