import styles from "./ProductPrice.module.scss";
import { ProductPriceProps } from "./productPriceClasses";

export default function ProductPrice(props: ProductPriceProps): JSX.Element {
  const { priceO, priceR } = props;

  if (!priceR) {
    return <div>{priceO}&nbsp;€</div>;
  }

  return (
    <div>
      <span className={styles.OriginalPrice}>{priceO}&nbsp;€</span>
      <span className={styles.ReducedPrice}>{priceR}&nbsp;€</span>
    </div>
  );
}
