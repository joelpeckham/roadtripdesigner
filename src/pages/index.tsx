import Head from "next/head";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";

const Home = () => {
  const AuthUser = useAuthUser();
  return (
    <div>
      <Head>
        <title>road trip designer</title>
        <meta
          name="Road Trip Designer"
          content="Plan your next road trip with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: 'url("bg.webp"),url("bg-small.webp")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();
export default withAuthUser()(Home);
