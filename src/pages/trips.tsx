import { withAuthUser, AuthAction } from "next-firebase-auth";
import { SpinnyMcSpinface } from "@/components/SpinnyMcSpinface";
import { NavBar } from "@/components/NavBar";
import { Divider } from "primereact/divider";
import { DataView } from "primereact/dataview";
import React, { useState, useEffect } from "react";
import { TripsService } from "@/service/TripsService";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { SpeedDial } from "primereact/speeddial";
import Image from "next/image"

interface Trip {
  id: string;
  name: string;
  date: string;
  image: string;
  description: string;
}

const TripGridItem = (props: Trip) => {
  function openTripItem() {
    console.log("Opening trip... ", props.id);
  }
  const header = (
    <Image
      alt="Card"
      src={props.image}
      className="h-8rem sm:h-12rem md:h-15rem w-full"
      width={300}
      height={300}
      style={{
        objectFit: "cover",
        borderRadius: "6px 6px 0px 0px",
        cursor: "pointer",
      }}
      onClick={openTripItem}
    />
  );

  const speedDialItems = [
    {
      icon: "pi pi-trash",
      label: "Delete",
      command: () => {
        console.log("Delete");
      },
    },
    {
      icon: "pi pi-clone",
      label: "Duplicate Trip",
      command: () => {
        console.log("Duplicate");
      },
    },
    {
      icon: "pi pi-users",
      label: "Invite Friends",
      command: () => {
        console.log("Invite");
      },
    },
  ];

  const footer = (
    <div className="flex justify-content-end align-items-end gap-2 h-full">
      <Button icon="pi pi-pencil" rounded outlined aria-label="Edit" onClick={openTripItem}></Button>
      <div style={{position:"relative", width:"3rem"}}>
        <SpeedDial
          aria-label="Trip Options"
          model={speedDialItems}
          transitionDelay={80}
          buttonClassName="p-button-outlined p-button-secondary speedDialButtonSmall"
          showIcon="pi pi-ellipsis-h"
          hideIcon="pi pi-times"
          radius={0.8}
          style={{ position: "absolute", bottom: "0", left: "0" }}
        />
      </div>
    </div>
  );

  return (
    <Card
      title={props.name}
      subTitle={props.date}
      className="cardWidth"
      header={header}
      footer={footer}
    >
      {/* <div className="flex flex-direction-column justify-content-end">
        <div>{footer}</div>
      </div> */}
    </Card>
  );
};

const Trips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  useEffect(() => {
    TripsService.getTrips().then((data) => setTrips(data));
  }, []);
  return (
    <>
      <div className="flex justify-content-center w-screen h-screen">
        <div className="siteWidth p-3">
          <NavBar />
          <div className="pl-4 pr-4">
            <Divider />
            <div className="flex justify-content-between align-items-center flex-wrap gap-3">
              <div className="flex justify-content-start align-items-baseline">
                <i
                  className="pi pi-map ml-1 mr-3"
                  style={{ fontSize: "1.5rem" }}
                ></i>
                <h1 className="m-0">My Trips</h1>
              </div>
              <Button>
                <i className="pi pi-plus mr-2"></i>
                <strong>Create New Trip</strong>
              </Button>
            </div>
            <Divider />
            <div className="flex justify-content-center">
              <DataView
                value={trips}
                layout="grid"
                gutter={true}
                itemTemplate={TripGridItem}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/",
  LoaderComponent: SpinnyMcSpinface,
})(Trips);
