export type ProductMeta = {
  query: string;
  total: number;
  page: number;
  pages: number;
};

export type ProductItem = {
  id: string;
  name: string;
  salePrice: number;
  retailPrice: number;
  imageUrl: string;
  quantityAvailable: number;
};
