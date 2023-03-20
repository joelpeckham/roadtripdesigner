import React, { useRef, MutableRefObject } from "react";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
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
      command: () => {
        user.signOut();
      }

    },
    {
      label: "Options",
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            toast.current.show({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    },
    {
      label: "Navigate",
      items: [
        {
          label: "React Website",
          icon: "pi pi-external-link",
          url: "https://reactjs.org/",
        },
        {
          label: "Router",
          icon: "pi pi-upload",
          command: (e) => {
            //router.push('/fileupload');
          },
        },
      ],
    },
  ];
  
  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <Menu model={items} popup ref={menu} />
      <div
        onClick={(e) => menu.current.toggle(e)}
      >
        <UserDisplay user={user}/>
      </div>
    </div>
  );
}
