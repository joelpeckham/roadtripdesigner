// NextUI Navbar Component
import { Navbar, Button, Text} from "@nextui-org/react";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import { SignUpModal } from "./SignUpModal";

export const SiteNav = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  return (
    <div>
      <Navbar variant="floating">
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
            <Button auto onPress={() => setSignUpModalVisible(true)}>
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
      <SignUpModal
        visible={signUpModalVisible}
        closeModal={() => {
          setSignUpModalVisible(false);
        }}
      />
    </div>
  );
};
