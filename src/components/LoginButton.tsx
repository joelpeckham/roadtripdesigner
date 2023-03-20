import { Button } from "primereact/button";
import { AuthModalOverlay } from "@/components/AuthModalOverlay";
import { AuthModalDialog } from "@/components/AuthModalDialog";
import { MutableRefObject, useRef, useState } from "react";
import { useWindowSize } from "@/components/hooks/useWindowSize";

enum AuthModalType {
  DIALOG = "dialog",
  OVERLAY = "overlay",
}

export const LoginButton = () => {
  const width = useWindowSize().width;
  const authModalType =
    width == undefined || width < 600
      ? AuthModalType.DIALOG
      : AuthModalType.OVERLAY;

  const [dialogVisible, setDialogVisible] = useState(false);
  const overlayPanel: MutableRefObject<any> | null = useRef(null);

  let AuthModal =
    authModalType === AuthModalType.DIALOG ? (
      <AuthModalDialog visible={dialogVisible} setVisible={setDialogVisible} />
    ) : (
      <AuthModalOverlay refer={overlayPanel} />
    );

  const buttonWasClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (authModalType === AuthModalType.DIALOG) {
      setDialogVisible(true);
    } else {
      overlayPanel.current.toggle(e);
    }
  };

  return (
    <div>
      <Button style={{height:"fit-content"}} label="login or register" onClick={(e) => buttonWasClicked(e)} />
      {AuthModal}
    </div>
  );
};
