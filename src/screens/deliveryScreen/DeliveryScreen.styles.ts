import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

export type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
