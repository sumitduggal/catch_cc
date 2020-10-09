import React from 'react';
import { render } from "@testing-library/react";

import { Header } from "./Header";
import { PriceSortOption, PRICE_SORT_OPTIONS } from '../utils/helpers';

const getHeaderComponent = (sortOption: PriceSortOption) => <Header sortOption={sortOption} setSortOption={() => {}} />

describe("<Header /> Tests", () => {
  test("renders Header with supplied data", () => {
    const { getByTestId, getByLabelText, getByAltText } = render(getHeaderComponent(PRICE_SORT_OPTIONS[0]));

    // Branding alt text is present
    expect(getByAltText("Catch Logo")).toBeInTheDocument();

    // PriceSortSelect is present
    expect(getByTestId("price-sort-by")).toBeInTheDocument();
    expect(getByLabelText("Sort Items by")).toBeInTheDocument()
  });
});