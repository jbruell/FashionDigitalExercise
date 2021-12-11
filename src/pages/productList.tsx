export { default } from "components/ProductList";

export async function getServerSideProps() {
  /*
  Unfortunately we have to fetch the product data in our Node environment.
  Client side requests are blocked because of missing CORS headers on the endpoint.
  */
  const res = await fetch(
    "https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json"
  );
  const data = res.ok ? await res.json() : null;
  return {
    props: {
      data: data,
      status: res.status,
    },
  };
}
