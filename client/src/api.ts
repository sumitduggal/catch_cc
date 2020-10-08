import { ProductMeta, ProductItem } from "./AppProps";

const REQUEST_HOST = "http://localhost:4000/";
const REQUEST_ENDPOINT = "api/product-list";

export type ProductsResponseType = {
  ok: boolean;
  data?: {
    metadata: ProductMeta;
    results: ProductItem[];
  };
  error?: Error;
};

export const getProductsList = async (): Promise<ProductsResponseType> => {
  let result: ProductsResponseType = {
    ok: false,
  };
  try {
    const response = await fetch(`${REQUEST_HOST}${REQUEST_ENDPOINT}`);

    const { ok, status } = response;
    if (ok) {
      const data = await response.json();

      result = {
        ok: true,
        data,
      };
    } else {
      // Note: assuming the error message structure will be
      /*
        {
          errorMessage: "Some error message"
        }
      **/
      const { errorMessage } = await response.json();
      const error = new Error(errorMessage);
      throw error;
    }
  } catch (error) {
    result = {
      ok: false,
      error,
    };
  }

  return result;
};
