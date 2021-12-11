import { Dispatch, SetStateAction } from "react";

export type ProductSizeFilterProps = {
  state: [SizeToggleOption[], Dispatch<SetStateAction<SizeToggleOption[]>>];
};

export const sizeToggleOption = {
  XXS: "",
  XS: "",
  S: "",
  M: "",
  L: "",
  XL: "",
  XXL: "",
  XXXL: "",
};

export type SizeToggleOption = keyof typeof sizeToggleOption;
