import React, { useEffect } from "react";
import { getProductsList } from "./api";
import { Header } from "./pageComponents/Header";

function App() {
  useEffect(() => {
    const requestProductsList = async () => {
      //  getting CORS
      const response = await getProductsList();
      console.log(response);
    };

    requestProductsList();
  }, []);
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Products List */}
    </div>
  );
}

export default App;
