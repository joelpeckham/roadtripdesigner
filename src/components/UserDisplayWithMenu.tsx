import React, { useRef, MutableRefObject } from "react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { UserDisplay } from "@/components/UserDisplay";
import { useAuthUser } from "next-firebase-auth";
import { useRouter } from 'next/router';

export const UserDisplayWithMenu = () => {
  const user = useAuthUser();
  const router = useRouter();
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
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => {
        router.push('/settings');
      }
    },
    {
      label: "My Trips",
      icon: "pi pi-map",
      command: () => {
        router.push('/trips');
      }
    }
  ];
  
  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menu} />
      <Button
        outlined
        onClick={(e) => menu.current.toggle(e)}
        severity="secondary"
      >
        <UserDisplay user={user}/>
    </Button>
    </div>
  );
}
