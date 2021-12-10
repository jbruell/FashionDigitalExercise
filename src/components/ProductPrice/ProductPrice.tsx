import styles from "./ProductPrice.module.scss";
import { ProductPriceProps } from "./productPriceClasses";

export default function ProductPrice(props: ProductPriceProps): JSX.Element {
  const { priceO, priceR } = props;

  if (!priceR) {
    return <div>{priceO}</div>;
  }

  return <div>{priceR}</div>;
}
