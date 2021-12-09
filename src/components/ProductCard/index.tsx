import { Product } from "model/product";

export type ProductCardProps = {
  product: Product;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
  const { product } = props;
  return <div>{product.id}</div>;
}
