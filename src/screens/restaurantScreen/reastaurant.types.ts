export interface Category {
  _id: string;
  name: string;
  short_description: string;
}

export interface Dish {
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
}

export interface Dish {
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
}

export interface Restaurant {
  id: string;
  imgUrl?: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  long: number;
  lat: number;
}

export interface Featured {
  name: string;
  short_description: string;
  restaurants: Restaurant[];
}
