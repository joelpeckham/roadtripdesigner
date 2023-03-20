import { LoginButton } from "@/components/LoginButton";
import { UserDisplayWithMenu } from "@/components/UserDisplayWithMenu";
import { useAuthUser } from "next-firebase-auth";

export const NavBar = () => {
  const start = (
    <div className="flex gap-3 align-items-center">
      <i className="pi pi-car ml-2" style={{ transform: "scale(1.3)" }}></i>
      <p>
        <strong>road trip designer.</strong>
      </p>
    </div>
  );
  const loginButton = <LoginButton />;
  const AuthUser = useAuthUser();
  let end;
  if (AuthUser.id) {
    end = <UserDisplayWithMenu />
  } else {
    end = loginButton;
  }
  return (
    <div className="absolute w-screen flex sm:justify-content-end justify-content-center p-3">
      <div className="rounded glass flex flex-wrap gap-3 align-items-center justify-content-between p-4 navWidth">
        {start}
        {end}
      </div>
    </div>
  );
};
