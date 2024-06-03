import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Divider } from "@mantine/core";
import { AuthForm } from "../auth-form/auth-form";
export function AuthModal({ opened, open, close }) {
  return (
    <>
    <div className="">
      <Modal opened={opened} onClose={close} title="Log in">
        <Divider my="xs" />
        <AuthForm />
      </Modal>
      </div>
    </>   
  );
}
