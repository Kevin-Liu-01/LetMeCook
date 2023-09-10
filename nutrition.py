
ingredients = []


def getRecipe(mealVal, restrictions, allergies, calories, method, time)
    #-------------------------------------------------------------------- 
    meal = mealVal

    dietaryRestrictions = restrictions

    allergies = allergies

    cals = calories

    cookingMethods = method

    timeLimit = time

    api_key = "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"
    openai.api_key = api_key

    prompt = f"Create a recipe using these ingredients: {', '.join(ingredients)}. The recipe should include detailed instructions. Here are the dietary restrictions: {', '.join(dietaryRestrictions)}. Here is what the user is allergic to: {', '.join(allergies)}. Here are possible ways the user can cook the meal: {', '.join(cookingMethods)}. The time limit for the meal is {timeLimit}. Here is around how many calories the meal should be: {cals}... Give me my response as a JSON with the name, ingredients, instructions, nutritional facts as the keys. Under each ingredient include the portion size, the calories, protein, fat, carbs, and fibers "

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that generates recipes."},
            {"role": "user", "content": prompt}
        ]
    )

    recipe = response['choices'][0]['message']['content'].strip()

    return recipe