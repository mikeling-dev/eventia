import Layout from "src/core/layouts/Layout";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import { Form, FORM_ERROR } from "src/core/components/Form";

import { useMutation } from "@blitzjs/rpc";
import { BlitzPage } from "@blitzjs/next";
import forgotPassword from "@/features/auth/mutations/forgotPassword";
import { ForgotPassword } from "@/features/auth/schemas";
import { useForm } from "@mantine/form";
import { Button, PasswordInput, TextInput } from "@mantine/core";

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword);
  const onSubmit = async (values) => {
    try {
      await forgotPasswordMutation(values);
    } catch (error: any) {
      return {
        [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
      };
    }
  };
  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Layout title="Forgot Your Password?">
      <h1>Forgot your password?</h1>

      {isSuccess ? (
        <div>
          <h2>Request Submitted</h2>
          <p>
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <Button type="submit">Reset Password</Button>
        </form>
      )}
    </Layout>
  );
};

export default ForgotPasswordPage;
