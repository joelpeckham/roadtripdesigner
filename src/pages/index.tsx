import Head from "next/head";
import { NavBar } from "@/components/NavBar";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import { Card } from "primereact/card";

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
      <div className="flex justify-content-center w-screen h-screen">
        <div className="siteWidth p-3">
          <div className="relative z-1">
            <NavBar />
            <Card className="glass p-4 mt-4">
              <h1 className="text-3xl">Welcome to road trip designer!</h1>
              <p className="text-xl">
                This is a tool to help you plan your next road trip. You can
                create a trip, add stops, and then view the trip on a map.
              </p>
              <p className="text-xl">
                {'To get started, click the "Login" button in the top right corner.'}
              </p>
            </Card>
          </div>

          <div
            className="h-screen w-screen fixed top-0 left-0 z-0"
            style={{
              backgroundImage: 'url("bg.webp"),url("bg-small.webp")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = withAuthUserTokenSSR()();
export default withAuthUser()(Home);
