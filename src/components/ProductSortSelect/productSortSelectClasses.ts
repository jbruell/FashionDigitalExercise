import { Dispatch, SetStateAction } from "react";

export type ProductSortSelectProps = {
  state: [SortOption, Dispatch<SetStateAction<SortOption>>];
};

export type SortOption = "lowestPrice" | "highestPrice" | "none";
