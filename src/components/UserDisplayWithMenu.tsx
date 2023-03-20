import React, { useRef, MutableRefObject } from "react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { UserDisplay } from "@/components/UserDisplay";
import { useAuthUser } from "next-firebase-auth";

export const UserDisplayWithMenu = () => {
  const user = useAuthUser();
  const menu : MutableRefObject<any> | null  = useRef(null);
  const toast : MutableRefObject<any> | null = useRef(null);
  const items: MenuItem[] = [
    // Sign Out user
    {
      label: "Sign Out",
      icon: "pi pi-sign-out",
      style: { fontWeight: "bold", color: "#EF4444"},
      className: "danger",
      command: () => {
        user.signOut();
      }

    },
  ];
  
  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menu} />
      <Button
        outlined
        onClick={(e) => menu.current.toggle(e)}
      >
        <UserDisplay user={user}/>
    </Button>
    </div>
  );
}
