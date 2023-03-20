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
      <div style={{width:"100vw", height:"100vh"}}>
        <img src="/annie-spratt-travel-unsplash.jpg" alt="Background Image of Map and travel related items on table." style={{width:"100%", height:"100%", objectFit:"cover"}} />
      </div>
      
    </div>
  );
}
