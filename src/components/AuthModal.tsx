import React, { MutableRefObject, useState} from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { TabView, TabPanel } from 'primereact/tabview';
import { RegisterForm} from "@/components/RegisterForm";
interface AuthModalProps {
    refer: MutableRefObject<any> | null;
}
// Enum for tabview
enum Tab {
    Login,
    Register
}

export const AuthModal = ({refer}:AuthModalProps) => {
  const overlayPanel = refer;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <OverlayPanel
        dismissable
        ref={overlayPanel}
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        style={{ width: "450px" }}
      >
        <TabView activeIndex={activeTabIndex} onTabChange={(e) => setActiveTabIndex(e.index)}>
            <TabPanel header="Login">
                <h3>Login</h3>
            </TabPanel>
            <TabPanel header="Register">
                <RegisterForm />
            </TabPanel>
        </TabView>
      </OverlayPanel>
    </div>
  );
};
