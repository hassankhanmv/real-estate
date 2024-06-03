import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Box,
} from "@mantine/core";
import { GoogleButton } from "./google-button";
import { FaceBookButton } from "./facebook-button";
import classes from "./auth-form.module.css";

export function AuthForm(props) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" {...props}>
      {/* <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <FaceBookButton radius="xl">Twitter</FaceBookButton>
      </Group> */}

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <TextInput
              variant="filled"
              size="md"
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="sm"
            />
          )}

          <TextInput
            variant="filled"
            size="md"
            required
            placeholder="Email*"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="sm"
          />

          <PasswordInput
            variant="filled"
            size="md"
            required
            placeholder="Password*"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="sm"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>
        <Button
          type="submit"
          radius="md"
          fullWidth
          size="md"
          mt={14}
          color="#000"
          variant="filled"
        >
          {upperFirst(type)}
        </Button>
        <Text size="xs" td="underline" style={{ color: "#000" }} mt={10}>
          <Anchor style={{ color: "#000" }}>Forgot Password?</Anchor>
        </Text>

        <Divider label="Or" labelPosition="center" my="lg" />
        <GoogleButton radius="md">Continue with Google</GoogleButton>
        <FaceBookButton radius="md">Continue with facebook</FaceBookButton>

        <Group justify="center" mt="md">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
            ta="center"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Sign up"}
          </Anchor>
        </Group>
      </form>
    </Paper>
  );
}
