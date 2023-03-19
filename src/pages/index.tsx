import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);
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
      <Dialog visible={state} onHide={() => setState(false)}>
        <h1>Dialog</h1>
        <p>Prime React</p>
      </Dialog>

      <Button label="Show" onClick={() => setState(true)} />
    </div>
  );
}
