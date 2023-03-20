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
  const end = (<LoginButton />);
  return (
      <div className="absolute w-screen flex justify-content-end p-3">
        <div className="glass rounded flex flex-wrap gap-3 justify-content-between p-4" style={{maxWidth:"450px", width:"100%"}}>
          {start}
          {end}
        </div>
      </div>
  );
};
