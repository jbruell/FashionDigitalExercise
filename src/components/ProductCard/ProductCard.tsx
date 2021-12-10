import { ProductCardProps } from "./productCardClasses";
import styles from "./ProductCard.module.scss";
import ProductPrice from "components/ProductPrice";

export default function ProductCard(props: ProductCardProps): JSX.Element {
  const {
    product: { id, brand, description, priceO, priceR, url, images, sizes },
  } = props;

  return (
    <div className={styles.Wrapper}>
      {images && images.length > 0 && (
        <img src={images[0]} alt={description} className={styles.Image} />
      )}
      <div className={styles.Content}>
        <div>
          <span className={styles.BrandName}>{brand}</span>
          <ProductPrice priceO={priceO} priceR={priceR} />
        </div>
      </div>
    </div>
  );
}
