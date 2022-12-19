import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { format } from "path";

const ClassPage = () => {
  const [isAddAClassModal, setIsAddAClassModal] = useState(false);
  const handleClose = () => setIsAddAClassModal(false);
  const handleShow = () => setIsAddAClassModal(true);

  const [form, setForm] = useState({});
  const [classes, setClasses] = useState([]);
  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // const createClass = () => {

  //   setClasses(classes.push())
  // }

  return (
    <Layout>
      <h1 className="title">My Classes</h1>
      <Button variant="dark" size="lg" onClick={handleShow}>
        Add a class
      </Button>
      <Modal show={isAddAClassModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="classYear">
              <Form.Label>Grade of the class</Form.Label>
              <Form.Control
                placeholder="Enter the grade of the class"
                onChange={(e) => setField("classGrade", e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={() => console.log(form)}>
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
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
