import Head from "next/head";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>road trip designer.</title>
        <meta
          name="Road Trip Designer"
          content="Plan your next road trip with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  );
}
