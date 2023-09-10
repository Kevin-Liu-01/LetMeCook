// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid, Flex, SelectSeparator, Text } from "@radix-ui/themes";
import {
  ArrowRightIcon,
  UtensilsIcon,
  SoupIcon,
  UtensilsCrossedIcon,
  Camera,
} from "lucide-react";

// import { api } from "~/utilscol/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>LETMECOOK</title>
        <meta
          name="description"
          content="Generate recipes by taking a picture."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-primary flex  w-full flex-col items-center justify-center gap-12">
        <Grid
          columns="2"
          gap="0"
          width="100%"
          height="100%"
          className="h-screen"
        >
          <Box className="bg-light align-center col-span-2 flex h-full flex-col justify-center p-12 sm:col-span-1">
            {/* <Image
              src="/assets/letmecook.svg"
              alt="logo"
              width="500"
              height="500"
            /> */}
            <Flex gap="3">
              <UtensilsIcon className="text-primary left-2 top-2 h-6 w-6 sm:h-8 sm:w-8" />
              <SoupIcon className="text-dark left-2 top-2 h-6 w-6 sm:h-8 sm:w-8" />
              <UtensilsCrossedIcon className="text-dark left-2 top-2 h-6 w-6 sm:h-8 sm:w-8" />
            </Flex>
            <h1 className="text-dark text-5xl font-extrabold tracking-tight sm:text-[5rem] ">
              LET ME <span className="text-primary">COOK</span>
            </h1>
            <SelectSeparator />
            <h2 className="font-secondary text-xl">
              {
                "Scan your fridge to make your next meal. Find recipes based on the ingredients you have."
              }
            </h2>

            <Text className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              <Link href="/camera">
                <button className="bg-primary text-light border-dark font-secondary flex items-center rounded-md border px-2 py-1 hover:animate-pulse">
                  Scan Ingredients
                  <Camera className="ml-1 h-4 w-4" />
                </button>
              </Link>
              <Link href="/About">
                <button className="border-dark font-secondary flex items-center rounded-md border px-2 py-1 hover:animate-pulse ">
                  How it works
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </Link>
            </Text>
          </Box>
          <Box
            className="align-center col-span-2 bg-[url(/assets/dish.jpg)] bg-cover	bg-center bg-no-repeat sm:col-span-1 sm:flex"
            // gap="2"
          ></Box>
        </Grid>
        <SelectSeparator />
        <Grid>
          <Box className="bg-light align-center col-span-2 flex h-full flex-col justify-center p-12 sm:col-span-1">
            <Image
              src="/assets/chef-serving-chicken.svg"
              alt="soup"
              width="500"
              height="500"
            />
          </Box>
        </Grid>
      </div>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
