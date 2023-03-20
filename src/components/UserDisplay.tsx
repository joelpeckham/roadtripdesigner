import { AuthUserContext } from "next-firebase-auth";

interface UserDisplayProps {
    user: AuthUserContext;
}

export const UserDisplay = ({user}:UserDisplayProps) => {
    return (
        <div className="flex gap-3 align-items-center">
        <i className="pi pi-user"></i>
        <p className="m-0">
            <strong>{user.displayName}</strong>
        </p>
        </div>
    );
};
