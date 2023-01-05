import Head from "next/head";
import Link from "next/link";
import AddClassButton from "../components/AddClassButton";

const ClassPage = () => {
  const mockClasses = [
    {
      grade: 8,
      day: "Wednesday",
      start: "6:45",
      end: "8:45",
    },
    {
      grade: 9,
      day: "Sunday",
      start: "3:00",
      end: "4:45",
    },
  ];

  return (
    <>
      <Head>
        <title>Class Page</title>
      </Head>

      <div className="flex justify-between p-4">
        <span className="text-2xl font-semibold underline">My Classes</span>
        {/* <button className="border">add a class (to make a component)</button> */}
        <AddClassButton />
      </div>

      <h1 className="p-4">
        click{" "}
        <Link href="/">
          <button className="rounded bg-orange-500">here</button>
        </Link>{" "}
        to go back to home page
      </h1>
    </>
  );
};

export default ClassPage;
