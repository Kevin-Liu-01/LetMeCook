// import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import {
  SelectSeparator,
  Grid,
  RadioGroup,
  Flex,
  ScrollArea,
  Text,
  Checkbox,
  Slider,
  Button,
} from "@radix-ui/themes";
import {
  ArrowRightIcon,
  UtensilsIcon,
  SoupIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

// import { api } from "~/utilscol/api";

export default function Form() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [calories, setCalories] = useState(100);
  const [time, setTime] = useState(300); // 5 minutes (300 seconds)
  const [meal, setMeal] = useState("breakfast"); // 5 minutes (300 seconds)

  const minutes = () => {
    return new Date(time * 1000).toISOString().slice(11, 19);
  };

  return (
    <>
      <ScrollArea
        type="always"
        scrollbars="vertical"
        className="bg-light h-full rounded-md p-4"
      >
        <h1 className="text-dark text-5xl font-extrabold tracking-tight  ">
          MAKE YOUR <span className="text-primary">MEAL</span>
        </h1>
        <SelectSeparator />
        <Text size="4">Meal</Text>
        <RadioGroup.Root defaultValue="breakfast" onValueChange={setMeal}>
          <Flex gap="2" direction="column">
            <label>
              <Flex gap="2" align="center">
                <RadioGroup.Item value="breakfast" />
                <Text size="2">Breakfast</Text>
              </Flex>
            </label>
            <label>
              <Flex gap="2" align="center">
                <RadioGroup.Item value="lunch" />
                <Text size="2">Lunch</Text>
              </Flex>
            </label>
            <label>
              <Flex gap="2" align="center">
                <RadioGroup.Item value="dinner" />
                <Text size="2">Dinner</Text>
              </Flex>
            </label>
          </Flex>
        </RadioGroup.Root>
        <SelectSeparator />
        <Text size="4">Dietary Restrictions?</Text>
        <Grid columns="3" gap="3">
          <label>
            <Checkbox mr="1" /> Vegetarian
          </label>
          <label>
            <Checkbox mr="1" /> Vegan
          </label>
          <label>
            <Checkbox mr="1" /> Eggetarian
          </label>
          <label>
            <Checkbox mr="1" /> Pescatarian
          </label>
          <label>
            <Checkbox mr="1" /> Protein-Inclusive
          </label>
          <label>
            <Checkbox mr="1" /> Dairy-Exclusive
          </label>
        </Grid>
        <SelectSeparator />
        <Text size="4">Allergies?</Text>
        <Grid columns="3" gap="3">
          <label>
            <Checkbox mr="1" /> Peanut
          </label>
          <label>
            <Checkbox mr="1" /> Egg
          </label>
          <label>
            <Checkbox mr="1" /> Milk
          </label>
          <label>
            <Checkbox mr="1" /> Shellfish
          </label>
          <label>
            <Checkbox mr="1" /> Wheat
          </label>
          <label>
            <Checkbox mr="1" /> Soy
          </label>
        </Grid>
        <SelectSeparator />

        <Text size="4">Calories</Text>
        <Slider
          color="orange"
          defaultValue={[calories]}
          onValueChange={setCalories}
          max={1000}
          step={1}
        />
        <Text>{calories}</Text>
        <SelectSeparator />

        <Text size="4">Cooking Method</Text>

        <Grid columns="3" gap="3">
          <label>
            <Checkbox mr="1" /> Stove
          </label>
          <label>
            <Checkbox mr="1" /> Microwave
          </label>
          <label>
            <Checkbox mr="1" /> Oven
          </label>
        </Grid>
        <SelectSeparator />

        <Text size="4">Time Limit</Text>

        <Slider
          color="orange"
          defaultValue={[time]}
          onValueChange={setTime}
          max={3599}
        />
        <Text>{minutes() || 0} minutes</Text>
        <SelectSeparator />
        <Link href="/preferences">
          <Button className="font-secondary w-48 hover:animate-pulse">
            Scan my Fridge <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </ScrollArea>
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
