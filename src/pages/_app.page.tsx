import { AppProps, ErrorBoundary } from "@blitzjs/next";
import { withBlitz } from "src/blitz-client";
import RootErrorFallback from "src/core/components/RootErrorFallback";
import "src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      {getLayout(<Component {...pageProps} />)}
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);
