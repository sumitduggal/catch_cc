import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";

import { Select, SelectOption } from "./Select";

const PRICE_SORT_OPTIONS = ['Highest', 'Lowest'];
const selectElement = ({ id = "price-sort", label, defaultValue}: { id?: string, label?: string | undefined, defaultValue: string}) => <Select id={id} label={label} value={defaultValue} onChange={() => {}}>
{PRICE_SORT_OPTIONS.map((value) => (
        <SelectOption key={value} value={value}>
          {value}
        </SelectOption>
      ))}
</Select>

test("renders learn react link", () => {
 const { rerender } = render(selectElement({ label: "Sort Items by", defaultValue: PRICE_SORT_OPTIONS[0]}));

    // label is present if passed down to Select component
    expect(screen.getByLabelText("Sort Items by")).toBeInTheDocument()
    expect(screen.getByLabelText("Sort Items by").value).toBe(PRICE_SORT_OPTIONS[0])

    // changes select element value when triggered change
    fireEvent.change(screen.getByLabelText("Sort Items by"), {
      target: { value: PRICE_SORT_OPTIONS[1] },
    });
    rerender(selectElement({ label: "Sort Items by", defaultValue: PRICE_SORT_OPTIONS[1]}));
    expect(screen.getByLabelText("Sort Items by").value).toBe(PRICE_SORT_OPTIONS[1])
  
    // label is absent if not passed down to Select component
    rerender(selectElement({ defaultValue: PRICE_SORT_OPTIONS[0]}))
    expect(screen.queryByLabelText("Sort Items by")).not.toBeInTheDocument()
});