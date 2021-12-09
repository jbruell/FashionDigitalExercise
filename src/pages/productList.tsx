import { ProductCard } from "components/ProductCard";
import { Product } from "model/product";

export type ProductListProps = {
  data?: Product[];
  status: number;
};

export default function ProductList(props: ProductListProps): JSX.Element {
  const { data, status } = props;

  if (!data || status !== 200) {
    return <div>Something went wrong: Status {status}</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  /*
  Unfortunately we have to fetch the product data in our Node environment.
  Client side requests are blocked because of missing CORS headers on the endpoint.
  */
  const res = await fetch(
    "https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json"
  );
  const data = await res.json();
  return {
    props: {
      data: data,
      status: res.status,
    },
  };
}
