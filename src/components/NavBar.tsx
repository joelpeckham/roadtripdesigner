import { LoginButton } from "@/components/LoginButton";

export const NavBar = () => {
  const start = (
    <div className="flex gap-3 align-items-center">
      <i className="pi pi-car" style={{transform:"scale(1.3)"}}></i>
      <p>
        <strong>road trip designer.</strong>
      </p>
    </div>
  );
  const end = (<LoginButton />);
  return (
      <div className="absolute w-screen flex justify-content-end p-3">
        <div className="rounded whiteNavCard flex flex-wrap gap-3 align-items-center justify-content-between p-4" style={{maxWidth:"450px", width:"100%"}}>
          {start}
          {end}
        </div>
      </div>
  );
};
