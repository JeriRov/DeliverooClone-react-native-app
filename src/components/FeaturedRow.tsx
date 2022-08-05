import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

interface Props {
  id: string;
  title: string;
  description: string;
}
const FeaturedRow = ({id, title, description}: Props) => {
  return (
    <View>
      <View className={'mt-4 flex-row items-center justify-between px-4'}>
        <Text className={'font-bold text-lg'}>{title}</Text>
        <ArrowRightIcon color={'#00CCBB'} />
      </View>
      <Text className={'text-xs text-gray-500 px-4'}>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className={'pt-4'}>
        {/* RestaurantCards... */}
        <RestaurantCard
          id={'1'}
          imgUrl={'http://tny.im/sZE'}
          title={'Yo! Sushi!'}
          rating={4.5}
          genre={'Japanese'}
          address={'123 Main St'}
          short_description={'This is a test'}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={'1'}
          imgUrl={'http://tny.im/sZE'}
          title={'Yo! Sushi!'}
          rating={4.5}
          genre={'Japanese'}
          address={'123 Main St'}
          short_description={'This is a test'}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={'1'}
          imgUrl={'http://tny.im/sZE'}
          title={'Yo! Sushi!'}
          rating={4.5}
          genre={'Japanese'}
          address={'123 Main St'}
          short_description={'This is a test'}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={'1'}
          imgUrl={'http://tny.im/sZE'}
          title={'Yo! Sushi!'}
          rating={4.5}
          genre={'Japanese'}
          address={'123 Main St'}
          short_description={'This is a test'}
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={'1'}
          imgUrl={'http://tny.im/sZE'}
          title={'Yo! Sushi!'}
          rating={4.5}
          genre={'Japanese'}
          address={'123 Main St'}
          short_description={'This is a test'}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
