import { withAuthUser, AuthAction } from "next-firebase-auth";
import { SpinnyMcSpinface } from "@/components/SpinnyMcSpinface";

const settings = () => <div>This is where your settings live!</div>;

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login",
  LoaderComponent: SpinnyMcSpinface,
})(settings);
