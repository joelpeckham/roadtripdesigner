import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  Container,
  Button,
  Input,
  Spacer,
  Text,
  Link,
} from '@nextui-org/react';
import { SiteNav } from '../components/SiteNav';

export default function Home() {
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
      <Container>
        <SiteNav />
        <Text h1>Plan your next road trip with ease.</Text>
      </Container>
    </div>
  );
}