import { LoginButton } from "@/components/LoginButton";

export const NavBar = () => {
  const start = (
    <div className="flex gap-2 align-items-center">
      <i className="pi pi-car"></i>
      <p>
        <strong>road trip designer.</strong>
      </p>
    </div>
  );
  const end = <LoginButton />;
  return (
    <div>
      <div className="relative">
        <div className="fixed glass rounded flex flex-wrap gap-3 justify-content-between p-4 m-5">
          {start}
          {end}
        </div>
      </div>
    </div>
  );
};
