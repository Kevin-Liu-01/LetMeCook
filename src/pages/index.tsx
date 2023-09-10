// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Grid,
  Flex,
  SelectSeparator,
  Text,
  Section,
} from "@radix-ui/themes";
import {
  ArrowRightIcon,
  UtensilsIcon,
  SoupIcon,
  UtensilsCrossedIcon,
  Camera,
} from "lucide-react";

import Footer from "../components/footer";

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
      <div className="font-primary flex  w-full flex-col items-center justify-center">
        <Grid
          columns="2"
          gap="0"
          width="100%"
          height="100%"
          className="min-h-screen"
        >
          <Box className="bg-light align-center col-span-2 flex h-full flex-col justify-center p-12 sm:col-span-1">
            <Image
              src="/assets/letmecookyellowicon.svg"
              alt="logo"
              width="500"
              height="500"
              className="absolute right-8 top-8 h-12 w-12 sm:left-12 sm:top-12 sm:hidden xl:flex"
            />
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
                <button className="bg-primary border-dark font-secondary flex items-center rounded-md border px-2 py-1 text-white  hover:animate-pulse">
                  Scan Ingredients
                  <Camera className="ml-1 h-4 w-4" />
                </button>
              </Link>
              <Link href="#howitworks">
                <button className="border-dark font-secondary flex items-center rounded-md border px-2 py-1   hover:animate-pulse">
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
        <Section className="from-secondary to-primary w-full bg-gradient-to-r px-12">
          <div className="grid sm:grid-cols-2">
            <div className="font-primary flex h-full flex-col justify-center text-4xl font-black">
              SPEND LESS TIME WORRYING.{" "}
              <p className="text-white">SPEND MORE TIME COOKING.</p>
              <SelectSeparator />
              <Text size="5" className="text-xl font-medium">
                {
                  "We've all been here before. The fridge is filled with leftovers and food that you don't know how to use. You don't have time to make a gourmet meal -- who does? -- you just need something to fill your stomach for the next few hours. With LetMeCook, meal planning goes from a weeks-long endeavor to just about instantaneous."
                }
              </Text>
            </div>
            <Image
              src="/assets/romantic-dinner.svg"
              alt="Dinner"
              height={400}
              width={400}
              className="mx-auto"
            />
          </div>
        </Section>

        <Section className="bg-light w-full px-12">
          <div className="grid sm:grid-cols-2">
            <Image
              src="/assets/chef-serving-chicken.svg"
              alt="Chef"
              height={400}
              width={400}
              className="mx-auto"
            />
            <div className="font-primary flex h-full flex-col justify-center text-4xl font-black">
              NO INGREDIENTS? <p className="text-primary">NO PROBLEM.</p>
              <SelectSeparator />
              <Text size="5" className="text-xl font-medium">
                {
                  " By taking a picture of your open fridge, your shopping cart, or your cupboard, and filling a form with your meal preferences and dietary requirements, you can have recipes recommended to you with the ingredients you have access to. You can generate a quick 5 minute recipe or learn how to make a Michelin Star rated recipe in an hour."
                }
              </Text>
            </div>
          </div>
        </Section>
        <Section className="from-secondary to-primary flex w-full justify-center bg-gradient-to-l px-12">
          <div className="font-primary text-4xl font-black">
            THE AVERAGE AMERICAN WASTES 238 LBS. OF FOOD PER YEAR.{" "}
            <p className="text-white">{"THAT'S $1,800 PER YEAR."}</p>
          </div>
        </Section>
        <Section id="howitworks" className="bg-light w-full px-8 sm:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 ">
            <div className="align-center font-primary justify-center text-4xl font-black sm:col-span-3 sm:flex">
              HOW <span className="text-primary sm:mx-3">LETMECOOK</span> LETS
              YOU COOK
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/woman-tourist.svg"
                alt="woman-tourist"
                height={300}
                width={300}
                className="mx-auto"
              ></Image>

              <div className="flex flex-row items-center">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-md text-white">
                  1
                </div>
                <div className="ml-4 text-lg font-semibold ">
                  Take a Picture of Your Fridge
                </div>
              </div>

              <div className="mt-2 w-64 text-center text-sm text-gray-600">
                {
                  "Our AI will detect the ingredients in your fridge to design a yummy meal."
                }
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/woman-with-a-laptop.svg"
                alt="woman-with-a-laptop"
                className="mx-auto"
                height={300}
                width={300}
              ></Image>

              <div className="flex flex-row items-center">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-md text-white">
                  2
                </div>
                <div className="ml-4 text-lg font-semibold">
                  Add your Preferences
                </div>
              </div>
              <div className="mt-2 w-64 text-center text-sm text-gray-600">
                {
                  "Choose how you want your recipe to be made. We'll find the best one for you."
                }
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/assets/woman-eating-salad.svg"
                className="mx-auto"
                alt="woman-eating-salad"
                height={300}
                width={300}
              ></Image>

              <div className="flex flex-row items-center">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-md text-white">
                  3
                </div>
                <div className="ml-4 text-lg font-semibold">
                  Cook your new Recipe
                </div>
              </div>
              <div className="mt-2 w-64 text-center text-sm text-gray-600">
                View your new recipe and start cooking! We provide a full list
                of ingredients.
              </div>
            </div>
          </div>
        </Section>
        <Footer />
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
