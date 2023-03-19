// NextUI Navbar Component
import { Navbar, Button, Text} from "@nextui-org/react";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
export const SiteNav = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  return (
    <div>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit">
            road trip designer.
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto size="xs" light onPress={() => setLoginModalVisible(true)}>
              Log In
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <LoginModal
        visible={loginModalVisible}
        closeModal={() => {
          setLoginModalVisible(false);
        }}
      />
    </div>
  );
};
