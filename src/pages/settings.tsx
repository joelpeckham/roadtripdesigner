import { withAuthUser, AuthAction } from "next-firebase-auth";
import { SpinnyMcSpinface } from "@/components/SpinnyMcSpinface";
import React, { useRef, MutableRefObject } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { getAuth, deleteUser } from "firebase/auth";
import { authErrorToMessage } from "../../authErrorToMessage";

const settings = () => {
    const toast : MutableRefObject<any> = useRef(null);
    const accept = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            await deleteUser(user).then(() => {
              }).catch((error) => {
                const errorCode = error.code;
                toast.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: authErrorToMessage(errorCode),
                    life: 4000,
                });
              });
        }
        else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'No user found. How did this happen?', life: 3000 });
        }
    };
    const confirmAccountDelete = () => {
        confirmDialog({
            message: 'Are you sure you want to delete your account?',
            header: 'Confirm Account Deletion',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: 'p-button-danger',
            accept,
        });
    };
    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <h1>Settings</h1>
            <div className="card">
                <Button onClick={confirmAccountDelete} icon="pi pi-times" label="Delete Account" severity="danger" outlined></Button>
            </div>
        </>
    );
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login",
  LoaderComponent: SpinnyMcSpinface,
})(settings);
