import React from "react";
import { ProductItem } from "../AppProps";
import { ProductCard } from "../components/ProductCard";

import { LoadingContainer } from "./LoadingContainer";

type ProductListProps = {
  isLoadingData: boolean;
  productItems: ProductItem[] | undefined;
};

export const ProductList: React.FC<ProductListProps> = ({
  isLoadingData,
  productItems,
}) => {
  const Products = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-stretch md:grid-cols-3 gap-8 my-10">
      {productItems &&
        productItems.map(
          ({
            id,
            name,
            salePrice,
            retailPrice,
            imageUrl,
            quantityAvailable,
          }) => (
            <ProductCard
              key={id}
              {...{
                id,
                name,
                salePrice,
                retailPrice,
                imageUrl,
                quantityAvailable,
              }}
            />
          )
        )}
    </div>
  );

  return (
    <div className="container mx-auto mb-10 flex-1">
      {isLoadingData ? <LoadingContainer /> : <Products />}
    </div>
  );
};
