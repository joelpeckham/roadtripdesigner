
import { Dialog } from "primereact/dialog";
import { AuthTabs } from "@/components/AuthTabs";

interface AuthDialogProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthModalDialog = ({visible, setVisible}:AuthDialogProps,) => {
  const dialogDisplay = (
    <div>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        modal
        style={{ width: "90vw", maxWidth: "400px" }}
      >
        <AuthTabs closeModal={(e)=>setVisible(false)} />
      </Dialog>
    </div>
  );

  return dialogDisplay;
};
