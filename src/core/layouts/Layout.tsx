import Head from "next/head";
import React, { FC, Suspense } from "react";
import { BlitzLayout } from "@blitzjs/next";

type Props = {
  title?: string;
  children?: React.ReactNode;
  maxWidth?: number;
};

const Layout: BlitzLayout<Props> = ({ title, maxWidth = 800, children }) => {
  return (
    <>
      <Head>
        <title>{title || "eventia"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Suspense fallback="Loading...">{children}</Suspense>
    </>
  );
};

export default Layout;
