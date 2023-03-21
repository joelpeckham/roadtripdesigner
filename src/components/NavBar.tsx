import { LoginButton } from "@/components/LoginButton";
import { UserDisplayWithMenu } from "@/components/UserDisplayWithMenu";
import { useAuthUser } from "next-firebase-auth";
import { useRouter } from "next/router";
import { Button } from "primereact/button";

export const NavBar = () => {
  const router = useRouter();
  const start = (
    <div style={{height:"fit-content", cursor:"pointer"}} onClick={()=>router.push("/")}>
      <div className="flex gap-2 align-items-center">
        <i className="pi pi-car" style={{ fontSize: "1.3rem" }} ></i>
        <p className="m-0">
          <strong>road trip designer.</strong>
        </p>
      </div>
    </div>
  );
  const loginButton = <LoginButton />;
  const AuthUser = useAuthUser();
  let end;
  if (AuthUser.id) {
    end = <UserDisplayWithMenu />;
  } else {
    end = loginButton;
  }
  return (
    <div className="w-full flex sm:justify-content-end justify-content-center">
      <div className="rounded glass flex flex-wrap gap-3 align-items-center justify-content-between p-4 mb-3 navWidth">
        {start}
        {end}
      </div>
    </div>
  );
};
