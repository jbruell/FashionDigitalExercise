import { Product } from "model/product";

export function findBrandWithMostProductsCheaperThan(
  data: Product[],
  priceInEuro: number
) {
  const counts: { [key: string]: number } = {};
  data
    .filter(({ priceO, priceR }) => (priceR ?? priceO) < priceInEuro)
    .map((product) => product.brand)
    .forEach((brand) => {
      if (counts[brand] === undefined) {
        counts[brand] = 0;
      }
      counts[brand] += 1;
    });

  const result = {
    amount: 0,
    brands: ["None"],
  };
  Object.keys(counts).forEach((key) => {
    const amount = counts[key];
    if (amount > result.amount) {
      result.amount = amount;
      result.brands = [key];
    } else if (amount === result.amount) {
      result.brands = [key, ...result.brands];
    }
  });
  return result.brands;
}

export function findBrandWithLargestSelectionOfSizes(data: Product[]) {
  const sizes: { [key: string]: Set<string> } = {};
  data
    .filter((product) => product.sizes)
    .forEach((product) => {
      const existingSizes = sizes[product.brand] ?? [];
      sizes[product.brand] = new Set([
        ...Array.from(existingSizes),
        ...(product.sizes?.map(String) ?? []),
      ]);
    });

  const result = {
    amount: 0,
    brands: ["None"],
  };
  Object.keys(sizes).forEach((key) => {
    const amount = sizes[key].size;
    if (amount > result.amount) {
      result.amount = amount;
      result.brands = [key];
    } else if (amount === result.amount) {
      result.brands = [key, ...result.brands];
    }
  });
  return result.brands;
}

export function findBrandWithLowestAveragePriceForSize(
  data: Product[],
  size: string
) {
  const prices: { [key: string]: number[] } = {};
  data
    .filter((product) => product.sizes?.includes(size))
    .forEach((product) => {
      const existingPrices = prices[product.brand] ?? [];
      prices[product.brand] = [
        ...existingPrices,
        product.priceR ?? product.priceO,
      ];
    });

  const result = {
    price: Infinity,
    brands: ["None"],
  };
  Object.keys(prices).forEach((key) => {
    const avg = prices[key].reduce((a, b) => a + b, 0) / prices[key].length;
    if (avg < result.price) {
      result.price = avg;
      result.brands = [key];
    } else if (avg === result.price) {
      result.brands = [key, ...result.brands];
    }
  });
  return result.brands;
}
