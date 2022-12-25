import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import { format } from "path";
import {
  Alert,
  Button,
  Card,
  Modal,
  Input,
  NumberInput,
  SegmentedControl,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { isClassExpression } from "typescript";

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

  const [isAddAClassModalOpened, setIsAddAClassModalOpened] = useState(false);
  const handleClose = () => setIsAddAClassModalOpened(false);
  const handleShow = () => setIsAddAClassModalOpened(true);

  const [form, setForm] = useState<Map<string, string>>(new Map());
  const [isGradeError, setIsGradeError] = useState<boolean>(false);
  // interface ClassInfo {
  //   grade: string;
  //   day: string;
  //   start: string;
  //   end: string;
  // }

  const [classes, setClasses] = useState<Map<string, string>[]>([]);

  const createClass = (newClass: Map<string, string>) => {
    classes.push(newClass);
    setClasses(classes);
  };

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <Layout>
      <h1 className="title">My Classes</h1>
      <Button onClick={handleShow}>Add a Class</Button>
      <Modal
        opened={isAddAClassModalOpened}
        onClose={handleClose}
        title="Add a Class"
        size="md"
      >
        <Input.Wrapper id="grade-input" withAsterisk label="Grade of Class">
          <NumberInput
            max={12}
            min={7}
            onChange={(val: number) => {
              if (typeof val === "undefined" || val < 7 || val > 12) {
                setIsGradeError(true);
              } else {
                setIsGradeError(false);
                setField("grade", val.toString());
              }
            }}
            error={isGradeError}
          />
        </Input.Wrapper>

        <Input.Wrapper id="grade-input" withAsterisk label="Day of Class">
          <SegmentedControl
            data={[
              { label: "Mon", value: "Monday" },
              { label: "Tue", value: "Tuesday" },
              { label: "Wed", value: "Wednesday" },
              { label: "Thu", value: "Thursday" },
              { label: "Fri", value: "Friday" },
              { label: "Sat", value: "Saturday" },
              { label: "Sun", value: "Sunday" },
            ]}
            onChange={(val: string) => setField("day", val)}
          />
        </Input.Wrapper>

        <TimeInput
          label="Time Class Starts"
          onChange={(val: Date) =>
            setField(
              "start",
              (val.getHours() + ":" + val.getMinutes()).toString()
            )
          }
          withAsterisk
        />
        <TimeInput
          label="Time Class Ends"
          onChange={(val: Date) =>
            setField(
              "end",
              (val.getHours() + ":" + val.getMinutes()).toString()
            )
          }
          withAsterisk
        />

        <Button
          onClick={() => {
            // Only allow create class button to be pressed when all fields have been filled out
            if (
              "grade" in form &&
              "day" in form &&
              "start" in form &&
              "end" in form
            ) {
              createClass(form);

              // Clear form after
              setForm(new Map());
              console.log(classes);
              setIsAddAClassModalOpened(false)
            } else {
              
              console.log("ALLERRT, need to code up for later")

              // <Alert
              //   title="You didn't fill out all the fields!"
              //   color="red"
              //   withCloseButton
              // >
              //   a
              // </Alert>;
            }
          }}
        >
          Create Class
        </Button>
      </Modal>

      {/* <Image
                        src="/images/profile.jpg"
                        height={144}
                        width={144}
                        alt="Your Name"
                    /> */}

      <h2>
        <Link href="/"> ← Back to homepage</Link>
      </h2>

      {/* class cards */}
      {classes.map((elem) => (
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <h2>{`Y${elem.grade} ${elem.day} ${elem.start} - ${elem.end}`}</h2>
          </Card.Section>
        </Card>
      ))}
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
