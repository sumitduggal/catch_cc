import React, { useState } from 'react';
import { render, screen, fireEvent } from "@testing-library/react";

import { Select, SelectOption } from "./Select";
import { PRICE_SORT_OPTIONS } from '../utils/helpers';

const MockSelectParent = ({ label }: {label?: string}) => {
  const [selectValue, setSelectValue] = useState(PRICE_SORT_OPTIONS[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(
      PRICE_SORT_OPTIONS.filter(
        (item) => item.value === e.currentTarget.value
      )[0]
    );
  };

  return <Select id="price-sort" label={label} value={selectValue.value} onChange={handleChange}>
  {PRICE_SORT_OPTIONS.map((option) => (
          <SelectOption key={option.value} value={option.value}>
            {option.text}
          </SelectOption>
        ))}
  </Select>
}

test("renders Select component and values updates on select change", () => {
    render(<MockSelectParent label="Sort Items by" />);

    // label is present if passed down to Select component
    expect(screen.getByLabelText("Sort Items by")).toBeInTheDocument()
    expect(screen.getByLabelText("Sort Items by").value).toBe(PRICE_SORT_OPTIONS[0].value)

    // changes select element value when triggered change
    fireEvent.change(screen.getByLabelText("Sort Items by"), {
      target: { value: PRICE_SORT_OPTIONS[1].value },
    });

    expect(screen.getByLabelText("Sort Items by").value).toBe(PRICE_SORT_OPTIONS[1].value)
});

test("renders Select without label if the label prop is not passed", () => {
  render(<MockSelectParent />);

  // label is absent if not passed down to Select component
    expect(screen.queryByLabelText("Sort Items by")).not.toBeInTheDocument()
})
