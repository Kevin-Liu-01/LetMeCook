import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=ranade@900,700,500,300,701,300,501,401,901,400&f[]=archivo@900,700,500,300,701,300,501,401,901,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SessionProvider session={session}>
        <Theme
          accentColor="orange"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <Component {...pageProps} />
        </Theme>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
