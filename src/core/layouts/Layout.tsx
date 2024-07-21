import Head from "next/head";
import React, { FC, Suspense } from "react";
import { BlitzLayout } from "@blitzjs/next";
import { Horizontal, Vertical } from "mantine-layout-components";
import { AppShell, Footer, Header, Navbar, Text } from "@mantine/core";

type Props = {
  title?: string;
  children?: React.ReactNode;
  maxWidth?: number;
};

const Layout: BlitzLayout<Props> = ({ title, maxWidth = 800, children }) => {
  const thisYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>{title || "eventia"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        padding="md"
        // navbar={
        //   <Navbar width={{ base: 300 }} height="100%" p="xs">
        //     {/* Navbar content */}
        //   </Navbar>
        // }
        header={
          <Header height={50} p="xs">
            <Horizontal fullH>
              <Text fw="bold">Eventia</Text>
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
