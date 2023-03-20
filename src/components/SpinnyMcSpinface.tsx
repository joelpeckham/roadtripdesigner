import { ProgressSpinner } from "primereact/progressspinner";
export const SpinnyMcSpinface = () => {
    return (
      <div className="flex justify-content-center align-items-center w-screen h-screen">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    );
  };