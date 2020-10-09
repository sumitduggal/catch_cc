import React from "react";

import { Select, SelectOption } from "../components/Select";
import { PriceSortOption, PRICE_SORT_OPTIONS } from "../utils/helpers";

export type PriceSortSelectProps = {
  sortOption: PriceSortOption;
  setSortOption: (value: PriceSortOption) => void;
};

export const PriceSortSelect = ({
  sortOption,
  setSortOption,
}: PriceSortSelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(
      PRICE_SORT_OPTIONS.filter(
        (item) => item.value === e.currentTarget.value
      )[0]
    );
  };

  return (
    <div data-testid="price-sort-by"  className="inline-block relative w-36">
      <Select id="price-sort" label="Sort Items by" value={sortOption.value} onChange={handleChange}>
        {PRICE_SORT_OPTIONS.map((option) => (
          <SelectOption key={option.value} value={option.value}>
            {option.text}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};
