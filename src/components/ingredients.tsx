// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React from "react";
import { Grid } from "@radix-ui/themes";
import { SelectSeparator, ScrollArea } from "@radix-ui/themes";

interface Ingredient {
  ingredient: string;
  portion: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fibers: number;
}

interface Recipe {
  ingredients: Ingredient[];
}

const calculateDailyValue = (
  ingredient: Ingredient,
  nutrient: keyof Ingredient,
) => {
  const dailyValues = {
    calories: 2000, // Daily recommended calories intake
    protein: 50, // Daily recommended protein intake (in grams)
    fat: 70, // Daily recommended fat intake (in grams)
    carbs: 300, // Daily recommended carbohydrates intake (in grams)
    fibers: 25, // Daily recommended dietary fiber intake (in grams)
  };

  const nutrientValue = parseFloat(ingredient[nutrient] as unknown as string);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dailyValue = dailyValues[nutrient];
  return ((nutrientValue / dailyValue) * 100).toFixed(2);
};

export default function Ingredients({ recipe }: { recipe: Recipe }) {
  return (
    <ScrollArea scrollbars="vertical" className="px-6 sm:px-12">
      <div className="py-6 sm:py-12">
        <h2 className="mb-4 text-3xl font-semibold ">Ingredients</h2>
        <SelectSeparator />
        {recipe?.ingredients.map((ingredient, index) => {
          return (
            <div
              key={index}
              className="bg-light border-dark mb-2 grid grid-cols-2 gap-6 rounded-md border p-2"
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {ingredient?.ingredient}
                </h3>
                <p>{ingredient?.portion}</p>
              </div>
              <Grid columns="2" gap="6">
                <div className="flex flex-col">
                  <p>Calories: {ingredient?.calories}</p>
                  <p>Protein: {ingredient?.protein}</p>
                  <p>Fat: {ingredient?.fat}</p>
                  <p>Carbs: {ingredient?.carbs}</p>
                  <p>Fiber: {ingredient?.fibers}</p>
                </div>
                <div className="flex flex-col">
                  <p>DV (%): {calculateDailyValue(ingredient, "calories")}</p>
                  <p>DV (%): {calculateDailyValue(ingredient, "protein")}</p>
                  <p>DV (%): {calculateDailyValue(ingredient, "fat")}</p>
                  <p>DV (%): {calculateDailyValue(ingredient, "carbs")}</p>
                  <p>DV (%): {calculateDailyValue(ingredient, "fibers")}</p>
                </div>
              </Grid>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
