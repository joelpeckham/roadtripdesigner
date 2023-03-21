import { withAuthUser, AuthAction } from "next-firebase-auth";
import { SpinnyMcSpinface } from "@/components/SpinnyMcSpinface";
import { NavBar } from "@/components/NavBar";
import { Divider } from "primereact/divider";
import { DataView } from "primereact/dataview";
import React, { useState, useEffect } from "react";
import { TripsService } from "@/service/TripsService";
import { Card } from "primereact/card";
import { Button } from 'primereact/button';

interface Trip {
  id: string;
  name: string;
  date: string;
  image: string;
  description: string;
}

const TripGridItem = (props: Trip) => {
  const header = (
    <img
      alt="Card"
      src={props.image}
      className="h-8rem sm:h-12rem md:h-15rem w-full"
      style={{ objectFit: "cover", borderRadius: "6px 6px 0px 0px" }}
    />
  );
  return (
    <Card
      title={props.name}
      subTitle={props.date}
      className="cardWidth"
      header={header}
    >
      <p className="m-0">{props.description}</p>
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
