import { MutableRefObject} from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { AuthTabs } from "@/components/AuthTabs";

interface AuthOverlayProps {
    refer: MutableRefObject<any> | null;
}

export const AuthModalOverlay = ({refer}:AuthOverlayProps,) => {
  const overlayPanel = refer;
  const overlayDisplay = (
    <div>
      <OverlayPanel
        dismissable
        ref={overlayPanel}
      >
        <AuthTabs closeModal={(e)=>overlayPanel?.current.toggle(e)}/>
      </OverlayPanel>
    </div>
  );

  return overlayDisplay;
};
