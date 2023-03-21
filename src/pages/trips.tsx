import { withAuthUser, AuthAction } from "next-firebase-auth";
import { SpinnyMcSpinface } from "@/components/SpinnyMcSpinface";
import { NavBar } from "@/components/NavBar";
import { Divider } from "primereact/divider";
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
const trips = () => {
  return (
    <>
      <div className="flex justify-content-center w-screen h-screen">
        <div className="siteWidth p-3">
          <NavBar />
          <div className="p-4">
            <div className="flex justify-content-start align-items-baseline">
              <i className="pi pi-map mr-3" style={{ fontSize: '1.5rem' }}></i>
              <h1>My Trips</h1>
            </div>
            <Divider type="solid" />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/",
  LoaderComponent: SpinnyMcSpinface,
})(trips);
