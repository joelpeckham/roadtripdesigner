import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { RegisterForm } from "@/components/RegisterForm";

interface AuthTabsProps {
  closeModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const AuthTabs = ({closeModal}:AuthTabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <TabView
      activeIndex={activeTabIndex}
      onTabChange={(e) => setActiveTabIndex(e.index)}
    >
      <TabPanel header="Login">
        <div className="pl-2 pr-2">
          <RegisterForm closeModalFunction={closeModal}/>
        </div>
      </TabPanel>
      <TabPanel header="Register">
        <div className="pl-2 pr-2">
          <RegisterForm closeModalFunction={closeModal}/>
        </div>
      </TabPanel>
    </TabView>
  );
};
