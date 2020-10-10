import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getProductsList, ProductsResponseType } from './api';

const successfulResponseData = {
  "metadata": {
    "query": "best sellers",
    "total": 102,
    "page": 1,
    "pages": 3
  },
  "results": [
    {
      "id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      "name": "Buy Olaplex No. 3 Hair Perfector",
      "salePrice": 3145,
      "retailPrice": 5000,
      "imageUrl": "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
      "quantityAvailable": 65
    },
    {
      "id": "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
      "name": "Havaianas Top Thongs -  Black",
      "salePrice": 1499,
      "retailPrice": 2500,
      "imageUrl": "https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg",
      "quantityAvailable": 71
    }
  ]
}

const PRODUCT_LIST_ENDPOINT = 'http://localhost:4000/api/product-list';
const server = setupServer(
  rest.get(PRODUCT_LIST_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json(successfulResponseData))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('fetches and return product list from server successfully', async () => {
  const response: ProductsResponseType = await getProductsList();

  const expected = {
    ok: true,
    data: successfulResponseData
  }
  expect(response).toEqual(expected);
})

test('fetches and return 404 error from server', async () => {
  // overwritting the server response
  server.use(
    rest.get(PRODUCT_LIST_ENDPOINT, (req, res, ctx) => res(
            ctx.status(404),
            ctx.json({
              errorMessage: `Not found`,
            }),
          )
        )
      )

  const response: ProductsResponseType = await getProductsList();  
  const error = new Error("Not found");

  const expected = {
    ok: false,
    error 
  };
  expect(response).toEqual(expected);
})

test('fetches and return Internal Server error from server', async () => {
  // overwritting the server response
  server.use(
        rest.get(PRODUCT_LIST_ENDPOINT, 
          (req, res, ctx) => res(
            ctx.status(500),
            ctx.json({
              errorMessage: `Internal server error`,
            }),
          )
        )   
      );

  const response: ProductsResponseType = await getProductsList();
  const error = new Error("Internal server error");

  const expected = {
    ok: false,
    error 
  };
  expect(response).toEqual(expected);
})

test('fetches and return Network error from server', async () => {
  // overwritting the server response
  server.use(
        rest.get(PRODUCT_LIST_ENDPOINT, 
          (req, res, ctx) => res.networkError('Failed to connect')
        )   
      );

  const response: ProductsResponseType = await getProductsList();
  const error = new Error("Network request failed");

  const expected = {
    ok: false,
    error 
  };
  expect(response).toEqual(expected);
});
