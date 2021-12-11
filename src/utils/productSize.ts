import {
  sizeToggleOption,
  SizeToggleOption,
} from "components/ProductSizeFilter";
import { Product } from "model/product";

export function findSizeRange(data: Product[]): [number, number] {
  const sizes = data.flatMap(
    (product) =>
      product.sizes?.map(parseInt).filter((size) => !isNaN(size)) ?? []
  );
  if (!sizes || sizes.length === 0) {
    return [-1, -1];
  }
  return [Math.min.apply(null, sizes), Math.max.apply(null, sizes)];
}

export function filterSize(
  data: Product[],
  sizeToggleOptions: SizeToggleOption[],
  sizeRange: [number, number],
  filterOperator: "and" | "or"
): Product[] {
  return data.filter((product) =>
    product.sizes?.some((size) => {
      const parsedSize = parseInt(size);
      const matchesToggleOption =
        sizeToggleOptions.length <= 0 ||
        (Object.prototype.hasOwnProperty.call(sizeToggleOption, "size") &&
          sizeToggleOptions.includes(size as SizeToggleOption));
      const matchesRange =
        !sizeRange ||
        (!isNaN(parsedSize) &&
          parsedSize >= sizeRange[0] &&
          parsedSize <= sizeRange[1]);

      if (filterOperator === "and") {
        return matchesToggleOption && matchesRange;
      }
      return matchesToggleOption || matchesRange;
    })
  );
}
