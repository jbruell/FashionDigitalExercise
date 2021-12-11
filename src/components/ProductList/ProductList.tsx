import { Switch } from "@mui/material";
import ProductCard from "components/ProductCard";
import ProductSizeFilter, {
  SizeToggleOption,
} from "components/ProductSizeFilter";
import ProductSizeRangeFilter from "components/ProductSizeRangeFilter";
import ProductSortSelect, { SortOption } from "components/ProductSortSelect";
import { useRef, useState } from "react";
import { filterSize, findSizeRange } from "utils/productSize";
import { sortProducts } from "utils/productSorting";
import styles from "./ProductList.module.scss";
import { ProductListProps } from "./productListClasses";

export default function ProductList(props: ProductListProps): JSX.Element {
  const { data, status } = props;

  if (!data || status !== 200) {
    return <div>Something went wrong: Status {status}</div>;
  }

  const [sizeToggleOptions, setSizeToggleOptions] = useState<
    SizeToggleOption[]
  >([]);
  const [filterOperator, setFilterOperator] = useState<"and" | "or">("or");

  const sizeRange = useRef<[number, number]>(findSizeRange(data));
  const [currentSizeRange, setCurrentSizeRange] = useState<[number, number]>([
    ...sizeRange.current,
  ]);

  const [sortBy, setSortBy] = useState<SortOption>("none");

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Controls}>
        <div className={styles.Card}>
          <h3>SIZES</h3>
          <ProductSizeFilter
            state={[sizeToggleOptions, setSizeToggleOptions]}
          />
          {sizeRange && currentSizeRange[0] !== -1 && (
            <>
              <div className={styles.OperatorToggleWrapper}>
                <span>and</span>
                <Switch
                  checked={filterOperator === "or"}
                  onChange={(_, checked) =>
                    setFilterOperator(checked ? "or" : "and")
                  }
                />
                <span>or</span>
              </div>
              <ProductSizeRangeFilter
                state={[currentSizeRange, setCurrentSizeRange]}
                min={sizeRange.current[0]}
                max={sizeRange.current[1]}
              />
            </>
          )}
        </div>
        <div className={styles.Card}>
          <h3>SORT BY</h3>
          <ProductSortSelect state={[sortBy, setSortBy]} />
        </div>
      </div>
      <div className={styles.List}>
        {filterSize(data, sizeToggleOptions, currentSizeRange, filterOperator)
          .sort(sortProducts(sortBy))
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
