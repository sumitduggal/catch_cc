import React from 'react';
import { render } from "@testing-library/react";

import { ProductCard } from "./ProductCard";
import { formatProductsPrice } from '../utils/formatters';

const SAMPLE_DATA = {
  "id": "1b7d187a-d015-42ee-97e4-669b27b8d92f",
  "name": "Havaianas Slim Thongs - Black",
  "salePrice": 1999,
  "retailPrice": 3000,
  "imageUrl": "https://s.catch.com.au/images/product/0001/1891/57ac11b61d049250349167_w200.jpg",
  "quantityAvailable": 33
};

describe("<ProductCard /> Tests", () => {
  test("renders ProductCard with supplied data", () => {
    const { getByText, queryByText, getByAltText } = render(<ProductCard productItem={SAMPLE_DATA} />);

    expect(getByText(SAMPLE_DATA.name)).toBeInTheDocument();

    // formatted pruces are rendered
    expect(getByText(`$${formatProductsPrice(SAMPLE_DATA.salePrice)}`)).toBeInTheDocument();
    expect(getByText(`$${formatProductsPrice(SAMPLE_DATA.retailPrice)}`)).toBeInTheDocument();
    
    // Image is rendered with "alt" attribute
    expect(getByAltText(SAMPLE_DATA.name)).toBeInTheDocument();
    expect(queryByText("SOLD OUT")).not.toBeInTheDocument();
  });

  test("renders sold out tag if quantity is 0", () => {
    const quantatyZeroProductItem = { ...SAMPLE_DATA, quantityAvailable: 0};
    const { getByText } = render(<ProductCard productItem={quantatyZeroProductItem} />);

    expect(getByText("SOLD OUT")).toBeInTheDocument();
  });

  test("dont renders retail price if is 0", () => {
    const quantatyZeroProductItem = { ...SAMPLE_DATA, retailPrice: 0};
    const { queryByText } = render(<ProductCard productItem={quantatyZeroProductItem} />);
    
    expect(queryByText(`$${formatProductsPrice(quantatyZeroProductItem.retailPrice)}`)).not.toBeInTheDocument();
  });
});