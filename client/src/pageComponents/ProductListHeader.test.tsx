import React from 'react';
import { render } from "@testing-library/react";

import { ProductListHeader } from "./ProductListHeader";

const SAMPLE_DATA = {
  "query": "best sellers",
  "total": 102,
  "page": 1,
  "pages": 3
};

describe("<ProductListHeader /> Tests", () => {
  test("renders ProductListHeader with supplied data", () => {
    const { getByText } = render(<ProductListHeader productMeta={SAMPLE_DATA} />);

    expect(getByText(SAMPLE_DATA.query)).toBeInTheDocument();
    expect(getByText(`${SAMPLE_DATA.total} items`)).toBeInTheDocument();
    expect(getByText(`Page ${SAMPLE_DATA.page}/${SAMPLE_DATA.pages}`)).toBeInTheDocument();
  });
});