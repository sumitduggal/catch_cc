import React, { useEffect, useState } from "react";

import { getProductsList } from "./api";

import { Header } from "./pageComponents/Header";
import { ProductList } from "./pageComponents/ProductList";

function App() {
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  useEffect(() => {
    const requestProductsList = async () => {
      setIsLoadingProducts(true);

      const response = await getProductsList();
      console.log(response);

      // Note: added timeout to show the loading
      // animation for atleast for 1 sec to avoid
      // seeing the flicker effect
      setTimeout(() => {
        setIsLoadingProducts(false);
      }, 1000);
    };

    requestProductsList();
  }, []);
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
