import React from "react";

import { ProductItem } from "../AppProps";

export const ProductCard = ({
  id,
  name,
  salePrice,
  retailPrice,
  imageUrl,
  quantityAvailable,
}: ProductItem) => {
  return <div>{name}</div>;
};
