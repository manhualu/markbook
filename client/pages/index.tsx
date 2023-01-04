import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Markbook</title>
      </Head>
      <h1>this is the home page!</h1>
      <h2>
        click{" "}
        <Link href="/ClassPage">
          <button className="rounded bg-orange-500">here</button>
        </Link>{" "}
        to go to the class page
      </h2>
    </>
  );
}
