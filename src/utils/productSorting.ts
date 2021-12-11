import { SortOption } from "components/ProductSortSelect";
import { Product } from "model/product";

export function sortProducts(option: SortOption) {
  return (p1: Product, p2: Product) => {
    if (option === "none") {
      return 0;
    }
    const p1Price = p1.priceR ?? p1.priceO;
    const p2Price = p2.priceR ?? p2.priceO;
    return option === "lowestPrice" ? p1Price - p2Price : p2Price - p1Price;
  };
}
