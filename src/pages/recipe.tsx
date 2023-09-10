/* eslint-disable @typescript-eslint/no-unsafe-argument */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import Head from "next/head";
import { useState, useEffect } from "react";
import { Box, Grid } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";

import Ingredients from "../components/ingredients";
import Instructions from "../components/instructions";
import Loading from "../components/loading";

export default function Recipe() {
  const searchParams = useSearchParams();
  const [recipe, setRecipe] = useState("");
  const [newRecipe, setNewRecipe] = useState(false);

  // Fetch recipe details using the query parameters
  useEffect(() => {
    setRecipe("");
    // Define the ngrok URL and data to send in the request
    const ngrokUrl =
      "https://4727-2607-f470-34-2101-5cff-1caf-5e5b-c03c.ngrok-free.app/scanner";
    const data = {
      meal: searchParams.get("meal"),
      restrictions: [
        searchParams.get("vegetarian") === "false" ? "" : "vegetarian",
        searchParams.get("vegan") === "false" ? "" : "vegan",
        searchParams.get("eggetarian") === "false" ? "" : "eggetarian",
        searchParams.get("pescatarian") === "false" ? "" : "paleo",
        searchParams.get("keto") === "false" ? "" : "keto",
        searchParams.get("paleo") === "false" ? "" : "paleo",
      ],
      allergies: [
        searchParams.get("peanut") === "false" ? "" : "peanut",
        searchParams.get("shellfish") === "false" ? "" : "shellfish",
        searchParams.get("egg") === "false" ? "" : "egg",
        searchParams.get("milk") === "false" ? "" : "milk",
        searchParams.get("soy") === "false" ? "" : "soy",
        searchParams.get("wheat") === "false" ? "" : "wheat",
      ],
      calories: searchParams.get("calories"),
      method: [
        searchParams.get("stove") === "false" ? "" : "stove",
        searchParams.get("microwave") === "false" ? "" : "microwave",
        searchParams.get("oven") === "false" ? "" : "oven",
      ],
      time: searchParams.get("time"),
      image: searchParams.get("image"),
    };

    // Send a POST request to the ngrok endpoint
    fetch(ngrokUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        // Response.json must be processed to unpack data
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        setRecipe(data);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
      });
  }, [newRecipe]);

  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>
      {recipe ? (
        <div className="font-primary flex w-full flex-col items-center justify-center gap-12 bg-gray-100">
          <Grid columns="5" width="100%" height="100%">
            <Box className="col-span-5 sm:col-span-3 sm:h-screen">
              <Instructions
                recipe={recipe}
                newRecipe={newRecipe}
                setNewRecipe={setNewRecipe}
              />
            </Box>

            <Box className="from-primary to-secondary col-span-5  bg-gradient-to-b sm:col-span-2 sm:h-screen">
              <Ingredients recipe={recipe} />
            </Box>
          </Grid>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
