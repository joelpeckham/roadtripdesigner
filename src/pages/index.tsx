import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import React  from 'react';
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
      <SiteNav />
      <Container>
        <Text h1>Plan your next road trip with ease.</Text>
        <Spacer y={1} />
        <Text h3>Enter your starting location and destination.</Text>
        <Spacer y={1} />
        <Container className={styles.tall}>
        </Container>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime fugit similique obcaecati magni placeat quae cupiditate beatae nihil perspiciatis rem saepe, molestiae accusantium dolor odit blanditiis officiis molestias nostrum?
        </Text>
      </Container>
      
      
    </div>
  );
}