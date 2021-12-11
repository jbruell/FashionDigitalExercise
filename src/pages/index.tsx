import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Link href="/productList">
          <a>/productList</a>
        </Link>
      </div>
      <div>
        <Link href="/statistics">
          <a>/statistics</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
