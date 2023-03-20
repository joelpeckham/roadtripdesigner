import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { RegisterForm } from "@/components/RegisterForm";
import { LoginForm } from "@/components/LoginForm";
import { useRouter } from "next/router";

interface AuthTabsProps {
  closeModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null | undefined
  ) => void;
  redirect?: string;
}
export const AuthTabs = ({ closeModal, redirect }: AuthTabsProps) => {
  const router = useRouter();
  if (redirect) {
    closeModal = () => router.push(redirect);
  }
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <TabView
      activeIndex={activeTabIndex}
      onTabChange={(e) => setActiveTabIndex(e.index)}
    >
      <TabPanel header="Login">
        <div className="pl-2 pr-2">
          <LoginForm closeModal={closeModal} />
        </div>
      </TabPanel>
      <TabPanel header="Register">
        <div className="pl-2 pr-2">
          <RegisterForm closeModal={closeModal} />
        </div>
      </TabPanel>
    </TabView>
  );
};
