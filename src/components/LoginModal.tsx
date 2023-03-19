// Login Modal using NextUI Modal Component
import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { Mail } from "../../public/icons/Mail";
import { Password } from "../../public/icons/Password";

interface LoginModalProps {
  visible: boolean;
  closeModal: () => void;
}

export const LoginModal = ({visible, closeModal}:LoginModalProps) => {
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
            Login to <strong> road trip designer.</strong>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
            label="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            label="Password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModal}>
            Close
          </Button>
          <Button auto onPress={closeModal}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}