import React, { useEffect, useState } from "react";

import { getProductsList } from "./api";
import { ProductItem, ProductMeta } from "./AppProps";

import { Header } from "./pageComponents/Header";
import { ProductList } from "./pageComponents/ProductList";

function App() {
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [productMeta, setProductMeta] = useState<ProductMeta | undefined>();
  const [productItems, setProductItems] = useState<ProductItem[] | undefined>();

  useEffect(() => {
    const requestProductsList = async () => {
      setIsLoadingProducts(true);

      const response = await getProductsList();

      // Note: responseok === true, means the request
      // returned with 200 status
      if (response.ok) {
        if (response.data) {
          const { metadata, results } = response.data;
          setProductMeta(metadata);
          setProductItems(results);
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

  console.log("productMeta", productMeta);
  console.log("productItems", productItems);

  return (
    <div className="flex flex-col w-screen h-screen">
      {/* Header */}
      <Header />
      {/* Products List */}
      <ProductList isLoadingData={isLoadingProducts} />
    </div>
  );
}

export default App;
