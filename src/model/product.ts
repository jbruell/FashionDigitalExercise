export type Product = {
  id: string;
  brand: string;
  description: string;
  priceO: number;
  priceR?: number | null;
  url: string;
  images?: string[] | null;
  sizes?: string[] | null;
};
