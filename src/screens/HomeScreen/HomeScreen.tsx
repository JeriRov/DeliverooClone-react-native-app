import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      {/* Header */}
      <View>

      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
