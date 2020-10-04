import { ProductItem } from "./AppProps";
export type PriceSortOption = {
  value: string;
  text: string;
};

export const PRICE_SORT_OPTIONS: PriceSortOption[] = [
  {
    value: "highest",
    text: "Highest price",
  },
  {
    value: "lowest",
    text: "Lowest price",
  },
];

const sortByLowest = (a: ProductItem, b: ProductItem) =>
  a.salePrice - b.salePrice;
const sortByHighest = (a: ProductItem, b: ProductItem) =>
  b.salePrice - a.salePrice;

export const sortPriceList = (
  sortOption: PriceSortOption,
  data: ProductItem[]
) => {
  let sortMethod;

  switch (sortOption.value) {
    case PRICE_SORT_OPTIONS[0].value:
      sortMethod = sortByHighest;
      break;
    case PRICE_SORT_OPTIONS[1].value:
    default:
      sortMethod = sortByLowest;
      break;
  }

  return [...data].sort(sortMethod);
};
