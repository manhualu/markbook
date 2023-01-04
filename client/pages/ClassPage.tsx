import Head from "next/head";
import Link from "next/link";

const ClassPage = () => {
  return (
    <>
      <Head>
        <title>Class Page</title>
      </Head>

      <div>
        click{" "}
        <Link href="/">
          <button className="rounded bg-orange-500">here</button>
        </Link>{" "}
        to go back to home page
      </div>
    </>
  );
};

export default ClassPage;
