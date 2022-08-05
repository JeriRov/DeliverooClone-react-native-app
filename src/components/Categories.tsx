import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* CategoryCard */}
      <CategoryCard imgUrl={'http://tny.im/sZD'} title={'testing 1 '} />
      <CategoryCard imgUrl={'http://tny.im/sZD'} title={'testing 2 '} />
      <CategoryCard imgUrl={'http://tny.im/sZD'} title={'testing 3 '} />
      <CategoryCard imgUrl={'http://tny.im/sZD'} title={'testing 4 '} />
      <CategoryCard imgUrl={'http://tny.im/sZD'} title={'testing 5 '} />
    </ScrollView>
  );
};
export default Categories;
