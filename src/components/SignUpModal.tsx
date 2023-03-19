// Login Modal using NextUI Modal Component
import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { Mail } from "../../public/icons/Mail";
import { Password } from "../../public/icons/Password";
import { Auth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

interface SignUpModalProps {
  visible: boolean;
  closeModal: () => void;
}

const signUp = (auth:Auth, email:string,password:string ) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

export const SignUpModal = ({ visible, closeModal }: SignUpModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeModal}
      >
        <Modal.Header>
          <Text id="modal-title">
            Sign up for <strong> road trip designer.</strong>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="jamesbond@MI6.gov.uk"
            contentLeft={<Mail fill="currentColor" />}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="vesperLyndf0rever!"
            contentLeft={<Password fill="currentColor" />}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModal}>
            Close
          </Button>
          <Button auto onPress={()=>signUp(auth, email, password)}>
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
