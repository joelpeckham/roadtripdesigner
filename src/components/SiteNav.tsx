// NextUI Navbar Component
import { Navbar, Button, Link, Text, Image, Spacer } from "@nextui-org/react";
import React from "react";
export const SiteNav = () => {
  return (
    <Navbar id="someNiceNav" variant="sticky">
      <Navbar.Brand>
        <Image src="/roadtripdesignerlogo.svg" width="25px" height="25px" />
        <Spacer x={0.5} />
        <Text b color="inherit">
          road trip designer
        </Text>
      </Navbar.Brand>
      <Navbar.Content id="averyniceContent">
          <Navbar.Link color="inherit" href="#" id="averynicelink">
            Login
          </Navbar.Link>
          <Navbar.Item id="averycoolitem">
            <Button auto flat as={Link} href="#" id="averynicebutton">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
    </Navbar>
  );
};
