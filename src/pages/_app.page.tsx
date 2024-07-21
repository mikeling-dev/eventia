import { AppProps, ErrorBoundary } from "@blitzjs/next";
import { Suspense } from "react";
import { withBlitz } from "src/blitz-client";
import RootErrorFallback from "src/core/components/RootErrorFallback";
import "src/styles/globals.css";

import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Suspense fallback="Loading...">
          <Component {...pageProps} />
        </Suspense>
      </MantineProvider>
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);
