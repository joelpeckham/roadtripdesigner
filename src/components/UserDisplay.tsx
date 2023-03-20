import { AuthUserContext } from "next-firebase-auth";

interface UserDisplayProps {
    user: AuthUserContext;
}

export const UserDisplay = ({user}:UserDisplayProps) => {
    return (
        <div className="flex gap-3 align-items-center">
        <i className="pi pi-user ml-2" style={{ transform: "scale(1.3)" }}></i>
        <p>
            <strong>{user.email}</strong>
        </p>
        </div>
    );
};
