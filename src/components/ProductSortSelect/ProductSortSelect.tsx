import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import styles from "./ProductSortSelect.module.scss";
import { ProductSortSelectProps, SortOption } from "./productSortSelectClasses";

export default function ProductSortSelect(
  props: ProductSortSelectProps
): JSX.Element {
  const {
    state: [option, setOption],
  } = props;

  return (
    <div className={styles.Wrapper}>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Sort products by"
          name="product-sort-by"
          value={option}
          onChange={(_, value) => setOption(value as SortOption)}
        >
          <FormControlLabel value="none" control={<Radio />} label="None" />
          <FormControlLabel
            value="lowestPrice"
            control={<Radio />}
            label="Lowest price"
          />
          <FormControlLabel
            value="highestPrice"
            control={<Radio />}
            label="Highest price"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
