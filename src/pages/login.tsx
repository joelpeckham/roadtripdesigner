import { withAuthUser, AuthAction } from "next-firebase-auth";
import { ProgressSpinner } from "primereact/progressspinner";
import { Card } from "primereact/card";
import { AuthTabs } from "@/components/AuthTabs";

const MyLoader = () => {
  return (
    <div className="flex justify-content-center align-items-center w-screen h-screen">
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s"
      />
    </div>
  );
};


const LoginPage = () => {
  return (
    <div className="flex justify-content-center align-items-center w-screen h-screen">
      <Card
        className="p-fluid"
        style={{
          width: "400px",
        }}
      >
        <AuthTabs closeModal={()=>{}} redirect="/" />
      </Card>
    </div>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: MyLoader,
})(LoginPage);
