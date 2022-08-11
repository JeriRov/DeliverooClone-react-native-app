import {Image} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {homeScreenProp} from './preparingOrederScreen.types';

const PreparingOrderScreen = () => {
  const navigation = useNavigation<homeScreenProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, [navigation]);

  return (
    <SafeAreaView className={'bg-[#00CCBB] flex-1 justify-center items-center'}>
      <Image
        source={require('../../assets/orderLoadingBackground.png')}
        className={'w-full h-full absolute'}
      />
      <Animatable.Image
        source={require('../../assets/orderLoading.gif')}
        animation={'slideInUp'}
        iterationCount={1}
        className={'h-96 w-96'}
      />
      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        className={'text-lg my-10 text-white fornt-bold text-center'}>
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color={'white'} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
