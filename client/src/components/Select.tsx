import React from "react";

export const Select: React.FC = ({ children }) => (
  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    {children}
  </select>
);

type OptionProps = {
  disabled?: boolean;
  label?: string;
  selected?: boolean;
  value: string;
};

export const SelectOption: React.FC<OptionProps> = ({
  disabled,
  selected,
  value,
  children,
}) => <option {...{ disabled, selected, value }}>{children}</option>;
