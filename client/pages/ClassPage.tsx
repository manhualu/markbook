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
    // {
    //   grade: 8,
    //   day: "Sunday",
    //   start: "1:00",
    //   end: "3:45",
    // },
  ];

  return (
    <>
      <Head>
        <title>Class Page</title>
      </Head>

      <div className="flex justify-between p-4">
        <span className="text-2xl font-bold underline">My Classes</span>
        <AddClassButton />
      </div>
      <h1 className="p-4">
        click{" "}
        <Link href="/">
          <button className="rounded bg-orange-500">here</button>
        </Link>{" "}
        to go back to home page
      </h1>

      {/* class cards */}
      <div className="flex justify-between space-x-10 p-4">
        {mockClasses.map((elem) => (
          <div className="Card rounded">
            <div className="flex justify-center p-4">
              <h1 className="text-xl font-bold">{`Y${elem.grade} ${elem.day} ${elem.start} - ${elem.end}`}</h1>
            </div>
            <div className="flex justify-center">7 students</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassPage;
