import { BlitzPage } from "@blitzjs/next";
import Layout from "src/core/layouts/Layout";
import UserInfo from "../core/components/UserInfo";
import { AuthenticationForm } from "@/core/components/mainAuth";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { Vertical } from "mantine-layout-components";

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser();
  return (
    <Layout title="Home">
      {currentUser ? (
        <UserInfo />
      ) : (
        <Vertical fullH fullW center>
          <AuthenticationForm />
        </Vertical>
      )}
    </Layout>
  );
};

export default Home;
