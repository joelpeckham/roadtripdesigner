import { withAuthUser, AuthAction } from "next-firebase-auth";

const trips = () => <div>My demo page</div>;

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login",
})(trips);
