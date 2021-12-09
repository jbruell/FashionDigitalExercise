export type Product = {
  id: string;
  brand: string;
  description: string;
  proceO: number;
  priceR?: number | null;
  url: string;
  images?: string[] | null;
  sizes?: Size[] | null;
};

export type Size =
  | number
  | "XXS"
  | "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
  | "XXL"
  | "XXXL";
