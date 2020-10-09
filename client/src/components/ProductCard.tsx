import React from "react";

import { ProductItem } from "../AppProps";
import { formatProductsPrice } from "../utils/formatters";

type ProductCardProps = {
  productItem: ProductItem;
};

export const ProductCard = ({ productItem }: ProductCardProps) => {
  const {
    name,
    salePrice,
    retailPrice,
    imageUrl,
    quantityAvailable,
  } = productItem;
  const isRetailPriceAvailable = retailPrice > 0;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
      <div className="relative">
        <img className="w-full" src={imageUrl} alt={name} />
        {quantityAvailable === 0 && (
          <span
            className="absolute uppercase right-0 bg-gray-900 px-3 py-1 text-sm text-white font-semibold mr-2 mb-2"
            style={{ bottom: "1rem" }}
          >
            sold out
          </span>
        )}
      </div>
      <div className="px-6 py-4 flex flex-col justify-between flex-1">
        <div className="font-bold text-xl text-center mb-2 capitalise">
          {name}
        </div>
        <div className="flex flex-col items-center space-y-5">
          <div className={`${isRetailPriceAvailable ? "line-through" : ""}`}>
            {isRetailPriceAvailable && `$${formatProductsPrice(retailPrice)}`}
          </div>
          <div className="text-4xl font-bold">
            ${formatProductsPrice(salePrice)}
          </div>
        </div>
      </div>
    </div>
  );
};
