import { useRouter } from "next/router";
import Layout from "src/core/layouts/Layout";
import { BlitzPage, Routes } from "@blitzjs/next";
import SignupForm from "./component/SignupForm";

const SignupPage: BlitzPage = () => {
  const router = useRouter();

  return (
    <Layout title="Sign Up">
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </Layout>
  );
};

export default SignupPage;
