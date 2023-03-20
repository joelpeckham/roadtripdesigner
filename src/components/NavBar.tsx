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
      <div className="absolute w-screen flex sm:justify-content-end justify-content-center p-3">
        <div className="rounded glass flex flex-wrap gap-3 align-items-center justify-content-between p-4 navWidth">
          {start}
          {end}
        </div>
      </div>
  );
};
