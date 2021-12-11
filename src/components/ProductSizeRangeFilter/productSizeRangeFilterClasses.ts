import { Dispatch, SetStateAction } from "react";

export type ProductSizeRangeFilterProps = {
  state: [[number, number], Dispatch<SetStateAction<[number, number]>>];
  min: number;
  max: number;
};
