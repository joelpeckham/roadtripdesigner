import { Button } from "primereact/button";
import { AuthModal } from "@/components/AuthModal";
import { MutableRefObject, useRef } from "react";

export const NavBar = () => {
  const overlayPanel: MutableRefObject<any> | null = useRef(null);
  const start = (
    <div className="flex gap-2 align-items-center">
      <i className="pi pi-car"></i>
      <p>
        <strong>road trip designer.</strong>
      </p>
    </div>
  );
  const end = (
    <div className="flex gap-2">
      <Button label="login" onClick={(e) => overlayPanel.current.toggle(e)} />
    </div>
  );
  return (
    <div>
      <div className="relative">
        <div className="fixed glass rounded flex flex-wrap gap-3 justify-content-between p-4 m-5">
          {start}
          {end}
        </div>
      </div>
      <AuthModal refer={overlayPanel} />
    </div>
  );
};
