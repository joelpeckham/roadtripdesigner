import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SiteNav } from "../components/SiteNav";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>road trip designer.</title>
        <meta
          name="Road Trip Designer"
          content="Plan your next road trip with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteNav />
    </div>
  );
}
