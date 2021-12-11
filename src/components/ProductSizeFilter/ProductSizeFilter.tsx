import {
  ProductSizeFilterProps,
  SizeToggleOption,
} from "./productSizeFilterClasses";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import styles from "./ProductSizeFilter.module.scss";

export default function ProductSizeFilter(
  props: ProductSizeFilterProps
): JSX.Element {
  const {
    state: [sizes, setSizes],
  } = props;

  return (
    <div className={styles.Wrapper}>
      <ToggleButtonGroup
        className={styles.ButtonGroup}
        value={sizes}
        onChange={(_, newSizes: SizeToggleOption[]) => setSizes(newSizes)}
        aria-label="Sizes"
      >
        <ToggleButton value="XXS">XXS</ToggleButton>
        <ToggleButton value="XS">XS</ToggleButton>
        <ToggleButton value="S">S</ToggleButton>
        <ToggleButton value="M">M</ToggleButton>
        <ToggleButton value="L">L</ToggleButton>
        <ToggleButton value="XL">XL</ToggleButton>
        <ToggleButton value="XXL">XXL</ToggleButton>
        <ToggleButton value="XXXL">XXXL</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
