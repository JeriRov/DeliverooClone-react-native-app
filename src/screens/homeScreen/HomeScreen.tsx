import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../../components/categories/Categories';
import FeaturedRow from '../../components/featuredRow/FeaturedRow';
import sanityClient from '../../../sanity';
import {Category, Featured} from './homeScreen.types';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState(
    [] as Featured[],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }`,
      )
      .then((data: Featured[]) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className={'bg-white pt-5'}>
      {/* Header */}
      <View className={'flex-row pb-3 items-center mx-4 space-x-2'}>
        <Image
          className={'h-7 w-7 bg-gray-300 p-4 rounded-full'}
          source={{
            uri: 'http://surl.li/cqfvh',
          }}
        />
        <View className={'flex-1'}>
          <Text className={'font-bold text-gray-400 text-xs'}>
            Deliver Now!
          </Text>
          <Text className={'font-bold text-xl'}>
            Current Location
            <ChevronDownIcon size={20} color={'#00CCBB'} />
          </Text>
        </View>
        <UserIcon size={35} color={'#00CCBB'} />
      </View>
      {/* Search */}
      <View className={'flex-row items-center space-x-2 pb-2 mx-4 px-1'}>
        <View
          className={'flex-row flex-1 space-x-2 bg-gray-200 items-center px-3'}>
          <SearchIcon color={'gray'} size={20} />
          <TextInput
            placeholder={'Restaurants and cuisines'}
            keyboardType={'default'}
          />
        </View>
        <AdjustmentsIcon color={'#00CCBB'} />
      </View>
      {/* Body */}
      <ScrollView
        className={'bg-gray-100'}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/* Categories */}
        <Categories />
        {/* Featured */}
        {featuredCategories?.map((category: Category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
