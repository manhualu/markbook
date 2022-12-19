import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";

const ClassPage = () => {
  return (
    <Layout>
      <Head>
        <title>My Classes</title>
      </Head>
      {/* <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Button
        </button> */}
      <h1 className="title">My Classes</h1>
      {/* <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-secondary`}
      ></div> */}

      {/* <Image
                        src="/images/profile.jpg"
                        height={144}
                        width={144}
                        alt="Your Name"
                    /> */}

      <h2>
        <Link href="/"> ← Back to homepage</Link>
      </h2>
    </Layout>
  );
};

export default ClassPage;

// export default function ClassPage() {
//     return (
//         <Layout>
//             <Head>
//                 <title>My Classes</title>

//             </Head>

//             <h1 className="title">
//                 My Classes
//             </h1>
//             {/* <Image
//                 src="/images/profile.jpg"
//                 height={144}
//                 width={144}
//                 alt="Your Name"
//             /> */}

//             <h2>
//                <Link href="/"> ← Back to homepage</Link>
//             </h2>
//         </Layout>
//     );

// }
