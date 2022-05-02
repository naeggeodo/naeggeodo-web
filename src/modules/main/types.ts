type Category =
  | 'CHICKEN'
  | 'JAPANESE'
  | 'CHINESE'
  | 'KOREAN'
  | 'SNACKS'
  | 'STEW'
  | 'PIZZA'
  | 'WESTERN'
  | 'GRILLED MEAT'
  | 'PORK FEET'
  | 'DESSERT'
  | 'FASTFOOD';

export interface CategoriesResponse {
  idx: number;
  category: Category;
}
