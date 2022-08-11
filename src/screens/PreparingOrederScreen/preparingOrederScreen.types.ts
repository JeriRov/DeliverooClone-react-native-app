import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Delivery: undefined;
  Settings: undefined;
};

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Delivery'
>;
