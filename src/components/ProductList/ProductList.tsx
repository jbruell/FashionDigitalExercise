import { ProductListProps } from "./productListClasses";
import styles from "./ProductList.module.scss";
import ProductCard from "components/ProductCard";

export default function ProductList(props: ProductListProps): JSX.Element {
  const { data, status } = props;

  if (!data || status !== 200) {
    return <div>Something went wrong: Status {status}</div>;
  }

  return (
    <div className={styles.Wrapper}>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
