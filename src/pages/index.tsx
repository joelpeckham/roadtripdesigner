import Head from "next/head";
import styles from "../styles/Home.module.css";
// import React  from 'react';
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Link,
} from "@nextui-org/react";
import { SiteNav } from "../components/SiteNav";
import { app, database } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const dbInstance = collection(database, "notes");
  const saveLocation = async () => {
    try {
      const docRef = await addDoc(dbInstance, {
        location: location,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Road Trip Designer</title>
        <meta
          name="Road Trip Designer"
          content="Plan your next road trip with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteNav />
      <Container>
        <Text h1>Plan your next road trip with ease.</Text>
        <Spacer y={1} />
        <Text h3>Enter your starting location and destination.</Text>
        <Spacer y={1} />
        <Input
          placeholder="Starting Location"
          onChange={(e) => setLocation(e.target.value)}
          label="Starting Location"
        />
        <Button auto flat onClick={() => saveLocation()}>
          Submit
        </Button>
        <Spacer y={1} />
        <Container className={styles.tall}></Container>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime
          fugit similique obcaecati magni placeat quae cupiditate beatae nihil
          perspiciatis rem saepe, molestiae accusantium dolor odit blanditiis
          officiis molestias nostrum?
        </Text>
      </Container>
    </div>
  );
}
