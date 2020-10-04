import React from "react";

import { LoadingContainer } from "./LoadingContainer";

type ProductListProps = {
  isLoadingData: boolean;
};

export const ProductList: React.FC<ProductListProps> = ({ isLoadingData }) => {
  return (
    <div className="container mx-auto mb-10 flex-1">
      {isLoadingData ? <LoadingContainer /> : "product list"}
    </div>
  );
};
