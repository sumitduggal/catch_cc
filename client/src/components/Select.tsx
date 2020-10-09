import React from "react";
import { SVGArrow } from "./SVGArrow";

type SelectProps = {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  children,
}) => (
  <div>
    {label && <label htmlFor={id}>{label}</label>}
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {children}
      </select>
      <SVGArrow />
    </div>
  </div>
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
