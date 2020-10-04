import React from "react";

import { Branding } from "../components/Branding";
import { PriceSortSelect, PriceSortSelectProps } from "./PriceSortSelect";

export const Header = ({ sortOption, setSortOption }: PriceSortSelectProps) => {
  return (
    <header className="container mx-auto page-layout">
      <div className="w-full md:w-auto border-b md:border-none p-5 sm:px-0 md:py-10 flex justify-center items-center">
        <Branding />
      </div>
      <PriceSortSelect {...{ sortOption, setSortOption }} />
    </header>
  );
};
