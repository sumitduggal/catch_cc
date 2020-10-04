const REQUEST_FORM_ENDPOINT =
  "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json";

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
    const response = await fetch(REQUEST_FORM_ENDPOINT);

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
