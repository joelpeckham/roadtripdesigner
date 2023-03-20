import { withAuthUser, AuthAction } from "next-firebase-auth";
import { SpinnyMcSpinface } from "@/components/SpinnyMcSpinface";
import { Card } from "primereact/card";
import { AuthTabs } from "@/components/AuthTabs";

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
  LoaderComponent: SpinnyMcSpinface,
})(LoginPage);
