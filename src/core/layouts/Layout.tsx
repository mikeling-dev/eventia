import Head from "next/head";
import React, { FC, Suspense } from "react";
import { BlitzLayout, Routes } from "@blitzjs/next";
import { Horizontal, Vertical } from "mantine-layout-components";
import { Anchor, AppShell, Button, Footer, Header, Navbar, Text } from "@mantine/core";
import { useMutation } from "@blitzjs/rpc";
import logout from "@/features/auth/mutations/logout";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import Link from "next/link";

type Props = {
  title?: string;
  children?: React.ReactNode;
  maxWidth?: number;
};

const Layout: BlitzLayout<Props> = ({ title, maxWidth = 800, children }) => {
  const thisYear = new Date().getFullYear();
  const [logoutMutation] = useMutation(logout);
  const currentUser = useCurrentUser();

  return (
    <>
      <Head>
        <title>{title || "eventia"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        padding="md"
        // navbar={<Navbar width={{ base: 250 }} height="100%" p="xs"></Navbar>}
        header={
          <Header height={55} p="xs">
            <Horizontal fullH spaceBetween>
              <Anchor
                component={Link}
                href={Routes.Home()}
                underline={false}
                color="gray.3"
                fw="bold"
              >
                Eventia
              </Anchor>

              {currentUser && (
                <Button
                  size="xs"
                  variant="light"
                  onClick={async () => {
                    await logoutMutation();
                  }}
                >
                  Logout
                </Button>
              )}
            </Horizontal>
          </Header>
        }
        footer={
          <Footer height={30}>
            <Horizontal fullH fullW center>
              <Text fz="xs" color="dimmed">
                Copyright {thisYear}
              </Text>
            </Horizontal>
          </Footer>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Vertical fullW fullH>
          <Suspense fallback="Loading...">{children}</Suspense>
        </Vertical>
      </AppShell>
    </>
  );
};

export default Layout;
