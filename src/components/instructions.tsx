/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React from "react";
import Link from "next/link";
import { Flex, Grid } from "@radix-ui/themes";
import { SelectSeparator, ScrollArea, Text } from "@radix-ui/themes";
import { Scan, Home, ListRestart } from "lucide-react";
import DietaryTags from "./dietaryTags";

interface Ingredient {
  ingredient: string;
  portionSize: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fibers: number;
}

interface Recipe {
  dietary_restrictions: string[];
  nutritional_facts: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
    fibers: number;
  };
  instructions: string[];
  name: string;
  ingredients: Ingredient[];
}

const calculateDailyValue = (
  ingredient: Ingredient,
  nutrient: keyof Ingredient,
) => {
  const dailyValues: Record<string, number> = {
    calories: 2000, // Daily recommended calories intake
    protein: 50, // Daily recommended protein intake (in grams)
    fat: 70, // Daily recommended fat intake (in grams)
    carbs: 300, // Daily recommended carbohydrates intake (in grams)
    fibers: 25, // Daily recommended dietary fiber intake (in grams)
  };

  const nutrientValue =
    ingredient && parseFloat(ingredient[nutrient] as unknown as string);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dailyValue = dailyValues[nutrient];
  return ((nutrientValue / dailyValue) * 100).toFixed(2);
};

export default function Ingredients({
  recipe,
  newRecipe,
  setNewRecipe,
}: {
  recipe: Recipe;
  newRecipe: boolean;
  setNewRecipe: (state: boolean) => void;
}) {
  return (
    <ScrollArea
      scrollbars="vertical"
      className="bg-light h-full rounded-md px-6 sm:px-12"
    >
      <div className="py-6 sm:py-12">
        <h1 className="text-dark text-5xl font-extrabold tracking-tight">
          {recipe?.name}
        </h1>
        <SelectSeparator />
        <DietaryTags dietary={recipe?.dietary_restrictions} />
        <SelectSeparator />
        <div className="border-dark rounded-md border p-4">
          <h2 className="text-dark text-3xl font-semibold">
            Nutritional Facts
          </h2>
          <SelectSeparator />
          <Grid columns="2" gap="6">
            <div className="flex flex-col">
              <p>Calories: {recipe?.nutritional_facts?.calories} kcal</p>
              <p>Protein: {recipe?.nutritional_facts?.protein} g</p>
              <p>Fat: {recipe?.nutritional_facts?.fat} g</p>
              <p>Carbohydrates: {recipe?.nutritional_facts?.carbs} g</p>
              <p>Fiber: {recipe?.nutritional_facts?.fibers} g</p>
            </div>
            <div className="flex flex-col">
              <p>
                DV (%):{" "}
                {calculateDailyValue(recipe.nutritional_facts, "calories")}
              </p>
              <p>
                DV (%):{" "}
                {calculateDailyValue(recipe.nutritional_facts, "protein")}
              </p>
              <p>
                DV (%): {calculateDailyValue(recipe.nutritional_facts, "fat")}
              </p>
              <p>
                DV (%): {calculateDailyValue(recipe.nutritional_facts, "carbs")}
              </p>
              <p>
                DV (%):{" "}
                {calculateDailyValue(recipe.nutritional_facts, "fibers")}
              </p>
            </div>
          </Grid>
        </div>
        <SelectSeparator />
        <div className=" rounded-lg p-4">
          <h2 className="text-dark text-3xl font-semibold">Instructions</h2>
          <ul className="">
            {recipe.instructions?.map((instruction, index) => (
              <li key={index} className="my-2">
                <Text size="5">{index + 1}.</Text>{" "}
                <Text size="4">{instruction}</Text>
              </li>
            ))}
          </ul>
        </div>
        <SelectSeparator />
        <Flex gap="3">
          <button
            onClick={() => setNewRecipe(!newRecipe)}
            className="border-dark hover:bg-primary font-secondary flex items-center rounded-md border px-2 py-1 duration-150 hover:animate-pulse"
          >
            New Recipe
            <ListRestart className="ml-1 h-4 w-4" />
          </button>
          <Link href="/camera">
            <button className="border-dark hover:bg-primary font-secondary flex items-center rounded-md border px-2 py-1 duration-150 hover:animate-pulse">
              Scan Again
              <Scan className="ml-1 h-4 w-4" />
            </button>
          </Link>
          <Link href="/">
            <button className="border-dark hover:bg-primary font-secondary flex items-center rounded-md border px-2 py-1 duration-150 hover:animate-pulse">
              Back Home
              <Home className="ml-1 h-4 w-4" />
            </button>
          </Link>
        </Flex>
      </div>
    </ScrollArea>
  );
}
