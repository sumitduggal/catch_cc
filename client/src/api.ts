const REQUEST_HOST = "http://localhost:4000/";
const REQUEST_ENDPOINT = "api/product-list";

export type ProductsResponseType = {
  ok: boolean;
  data?: any;
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
      if (status >= 400 && status < 500) {
        const error = await response.json();

        result = {
          ok: false,
          error,
        };
      }
    }
  } catch (error) {
    result = {
      ok: false,
      error,
    };
  }

  return result;
};
