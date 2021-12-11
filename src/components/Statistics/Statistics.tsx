import {
  findBrandWithLargestSelectionOfSizes,
  findBrandWithLowestAveragePriceForSize,
  findBrandWithMostProductsCheaperThan,
} from "utils/statistics";
import styles from "./Statistics.module.scss";
import { StatisticsProps } from "./statisticsClasses";

export default function ProductList(props: StatisticsProps): JSX.Element {
  const { data, status } = props;

  if (!data || status !== 200) {
    return <div>Something went wrong: Status {status}</div>;
  }

  return (
    <div className={styles.Wrapper}>
      <div>
        Brand(s) with the most products below 40€:{" "}
        {findBrandWithMostProductsCheaperThan(data, 40)}
      </div>
      <div>
        Brand(s) with the largest selection of sizes:{" "}
        {findBrandWithLargestSelectionOfSizes(data)}
      </div>
      <div>
        Brand(s) with the lowest average price for customers wearing size 32:{" "}
        {findBrandWithLowestAveragePriceForSize(data, "32")}
      </div>
    </div>
  );
}
