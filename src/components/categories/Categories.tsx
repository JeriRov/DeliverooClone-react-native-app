import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import CategoryCard from '../categoryCard/CategoryCard';
import sanityClient, {urlFor} from '../../../sanity';
import {Category} from './categories.types';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
      `,
      )
      .then((data: never[]) => {
        if (typeof setCategories !== 'undefined') {
          setCategories(data);
        }
      });
  }, []);
  return (
    <ScrollView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categories?.map((category: Category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};
export default Categories;
