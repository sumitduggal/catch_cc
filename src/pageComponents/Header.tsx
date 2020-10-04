import React from "react";
import { Branding } from "../components/Branding";

export const Header = () => {
  return (
    <header className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-auto border-b md:border-none p-5 sm:px-0 md:py-10 flex justify-center items-center">
        <Branding />
      </div>
    </header>
  );
};
