import React, { useEffect, useState } from "react";

import { getProductsList } from "./api";
import { ProductItem, ProductMeta } from "./AppProps";
import {
  PriceSortOption,
  PRICE_SORT_OPTIONS,
  sortPriceList,
} from "./utils/helpers";

import { Header } from "./pageComponents/Header";
import { ProductList } from "./pageComponents/ProductList";
import { ProductListHeader } from "./pageComponents/ProductListHeader";

function App() {
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [productMeta, setProductMeta] = useState<ProductMeta | undefined>();
  const [productItems, setProductItems] = useState<ProductItem[] | undefined>();
  const [sortOption, setSortOption] = useState<PriceSortOption>(
    PRICE_SORT_OPTIONS[0]
  );

  useEffect(() => {
    const requestProductsList = async () => {
      setIsLoadingProducts(true);

      const response = await getProductsList();

      // Note: response.ok === true, means the request
      // returned with 200 status
      if (response.ok) {
        if (response.data) {
          const { metadata, results } = response.data;
          setProductMeta(metadata);
          setProductItems(sortPriceList(sortOption, results));
        }
      }

      // Note: added timeout to show the loading
      // animation for atleast for 1 sec to avoid
      // seeing the flicker effect
      setTimeout(() => {
        setIsLoadingProducts(false);
      }, 1000);
    };

    requestProductsList();
  }, []);

  useEffect(() => {
    if (productItems) {
      setProductItems(sortPriceList(sortOption, productItems));
    }
    // Note: no need to depend on productItems,
    // as this will cause infinite state update loop
    // eslint-disable-next-line
  }, [sortOption]);

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Header */}
      <Header sortOption={sortOption} setSortOption={setSortOption} />
      {productMeta && <ProductListHeader {...{ productMeta }} />}
      {/* Products List */}
      <ProductList
        isLoadingData={isLoadingProducts}
        productItems={productItems}
      />
    </div>
  );
}

export default App;
