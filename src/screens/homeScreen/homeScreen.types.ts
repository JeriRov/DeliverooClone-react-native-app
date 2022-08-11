export interface Category {
  _id: string;
  name: string;
  short_description: string;
}

interface Dish {
  _id: string;
  name: string;
  short_description: string;
  image: string;
  price: number;
}

export interface Restaurant {
  _id: string;
  name: string;
  short_description: string;
  image: string;
  lat: number;
  long: number;
  address: string;
  rating: number;
  type: Category;
  dishes: Dish[];
}

export interface Featured {
  _id: string;
  name: string;
  short_description: string;
  restaurants: Restaurant[];
}
