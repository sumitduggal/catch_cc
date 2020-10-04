import React from "react";

import { ProductMeta } from "../AppProps";

type ProductListHeaderProps = {
  productMeta: ProductMeta;
};

export const ProductListHeader = ({ productMeta }: ProductListHeaderProps) => {
  const { query, total, page, pages } = productMeta;
  return (
    <div className="container mx-auto page-layout">
      <h1 className="capitalize text-xl font-bold border-b border-black">
        {query}
      </h1>
      <div className="flex space-x-5">
        <div>{total} items</div>
        <div>
          Page {page}/{pages}
        </div>
      </div>
    </div>
  );
};

// productMeta;
