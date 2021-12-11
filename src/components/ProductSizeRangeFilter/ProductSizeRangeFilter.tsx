import { Slider } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./ProductSizeRangeFilter.module.scss";
import { ProductSizeRangeFilterProps } from "./productSizeRangeFilterClasses";

export default function ProductSizeRangeFilter(
  props: ProductSizeRangeFilterProps
): JSX.Element {
  const {
    state: [sizes, setSizes],
    min,
    max,
  } = props;

  if (!sizes) {
    return <></>;
  }

  const [localRange, setLocalRange] = useState<[number, number]>(sizes);

  function handleChange(
    value: number | number[],
    setter: Dispatch<SetStateAction<[number, number]>>
  ) {
    if (typeof value === "number") {
      setter([value, value]);
    } else {
      setter([value[0], value[1]]);
    }
  }

  return (
    <div className={styles.Wrapper}>
      <Slider
        value={localRange}
        min={min}
        max={max}
        onChange={(_, value) => handleChange(value, setLocalRange)}
        onChangeCommitted={(_, value) => handleChange(value, setSizes)}
        valueLabelDisplay="on"
        getAriaLabel={() => "Size range"}
        getAriaValueText={() => `${localRange[0] - localRange[1]}`}
      />
    </div>
  );
}
