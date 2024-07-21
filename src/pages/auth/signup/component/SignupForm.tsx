import { Form, FORM_ERROR } from "src/core/components/Form";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import signup from "@/features/auth/mutations/signup";
import { Signup } from "@/features/auth/schemas";
import { useMutation } from "@blitzjs/rpc";
import { Vertical } from "mantine-layout-components";
import { Button, PasswordInput, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

type SignupFormProps = {
  onSuccess?: () => void;
};

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup);
  const onSubmit = async (values) => {
    try {
      await signupMutation(values);
      props.onSuccess?.();
    } catch (error: any) {
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        // This error comes from Prisma
        return { email: "This email is already being used" };
      } else {
        return { [FORM_ERROR]: error.toString() };
      }
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Vertical>
      <Title>Create an Account</Title>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          label="name"
          placeholder="Your name"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="password"
          {...form.getInputProps("password")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Vertical>
  );
};

export default SignupForm;
