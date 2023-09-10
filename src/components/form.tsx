/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
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
import { ArrowRightIcon } from "lucide-react";

// import { api } from "~/utilscol/api";

export default function Form({ image }: { image: string }) {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [calories, setCalories] = useState(100);
  const [time, setTime] = useState(300); // 5 minutes (300 seconds)
  const [meal, setMeal] = useState("breakfast"); // 5 minutes (300 seconds)
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [eggetarian, setEggetarian] = useState(false);
  const [pescatarian, setPescatarian] = useState(false);
  const [keto, setKeto] = useState(false);
  const [paleo, setPaleo] = useState(false);
  const [peanut, setPeanut] = useState(false);
  const [egg, setEgg] = useState(false);
  const [milk, setMilk] = useState(false);
  const [shellfish, setShellfish] = useState(false);
  const [wheat, setWheat] = useState(false);
  const [soy, setSoy] = useState(false);
  const [stove, setStove] = useState(false);
  const [microwave, setMicrowave] = useState(false);
  const [oven, setOven] = useState(false);

  const minutes = () => {
    return new Date(time * 1000).toISOString().slice(11, 19);
  };

  return (
    <>
      <ScrollArea
        scrollbars="vertical"
        className="bg-light h-full rounded-md p-4"
      >
        <h1 className="text-dark text-5xl font-extrabold tracking-tight  ">
          MAKE YOUR <span className="text-primary">MEAL</span>
        </h1>
        <SelectSeparator />
        <Text size="4">Meal</Text>
        <RadioGroup.Root onValueChange={setMeal}>
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
            <Checkbox
              mr="1"
              checked={vegetarian}
              onCheckedChange={setVegetarian}
            />
            Vegetarian
          </label>
          <label>
            <Checkbox mr="1" checked={vegan} onCheckedChange={setVegan} /> Vegan
          </label>
          <label>
            <Checkbox
              mr="1"
              checked={eggetarian}
              onCheckedChange={setEggetarian}
            />
            Eggetarian
          </label>
          <label>
            <Checkbox
              mr="1"
              checked={pescatarian}
              onCheckedChange={setPescatarian}
            />
            Pescatarian
          </label>
          <label>
            <Checkbox mr="1" checked={keto} onCheckedChange={setKeto} /> Keto
          </label>
          <label>
            <Checkbox mr="1" checked={paleo} onCheckedChange={setPaleo} /> Paleo
          </label>
        </Grid>
        <SelectSeparator />
        <Text size="4">Allergies?</Text>
        <Grid columns="3" gap="3">
          <label>
            <Checkbox mr="1" checked={peanut} onCheckedChange={setPeanut} />{" "}
            Peanut
          </label>
          <label>
            <Checkbox mr="1" checked={egg} onCheckedChange={setEgg} /> Egg
          </label>
          <label>
            <Checkbox mr="1" checked={milk} onCheckedChange={setMilk} /> Milk
          </label>
          <label>
            <Checkbox
              mr="1"
              checked={shellfish}
              onCheckedChange={setShellfish}
            />{" "}
            Shellfish
          </label>
          <label>
            <Checkbox mr="1" checked={wheat} onCheckedChange={setWheat} /> Wheat
          </label>
          <label>
            <Checkbox mr="1" checked={soy} onCheckedChange={setSoy} /> Soy
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
            <Checkbox mr="1" checked={stove} onCheckedChange={setStove} /> Stove
          </label>
          <label>
            <Checkbox
              mr="1"
              checked={microwave}
              onCheckedChange={setMicrowave}
            />{" "}
            Microwave
          </label>
          <label>
            <Checkbox mr="1" checked={oven} onCheckedChange={setOven} /> Oven
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
        <Flex gap="3">
          <Link
            href={{
              pathname: "/recipe",
              query: {
                image,
                calories,
                time,
                meal,
                vegetarian,
                vegan,
                eggetarian,
                pescatarian,
                keto,
                paleo,
                peanut,
                egg,
                milk,
                shellfish,
                wheat,
                soy,
                stove,
                microwave,
                oven,
              },
            }}
          >
            {" "}
            <Button className="font-secondary w-48 hover:animate-pulse">
              Use parameters <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/recipe">
            <button className="border-dark font-secondary flex h-full w-48 items-center justify-center rounded-md border hover:animate-pulse">
              <Text size="2">Skip</Text> <ArrowRightIcon className="h-4 w-4" />
            </button>
          </Link>
        </Flex>
      </ScrollArea>
    </>
  );
}
