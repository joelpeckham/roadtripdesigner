// NextUI Navbar Component
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import React from "react";
export const SiteNav = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link href="/">
          <Text h2>Road Trip Designer</Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Link href="/about">
          <Button auto size="sm">
            About
          </Button>
        </Link>
      </Navbar.Content>
    </Navbar>
  );
}
