# LetMeCook (letmecook.us)

## Inspiration
Everyone loves to eat. But whether you’re a college student, a fitness enthusiast trying to supplement your gains, or have dietary restrictions, it can be hard to come up with meal ideas. LetMeCook is an innovative computer vision-powered web application that combines a scan of user’s fridge or cupboard with dietary needs to generate personalized recipes based on the ingredients they have.

## What it does
When opening LetMeCook, users are first prompted to take an image of their fridge or cupboard. After this, the taken image is entered into an object segmentation and image classification machine-learning algorithm to classify the food items being seen. Next, the app sends this data to the Edamam API, which then returns comprehensive nutritional facts for each ingredient. sers are first presented with an option to add dietary needs or go straight to scanning their fridge/ingredient storage. After this, users are presented with an option to add custom dietary needs or go directly to the recipe page. When adding dietary needs, users fill out a questionnaire regarding allergies, dietary preferences (such as vegetarian or vegan), or specific nutritional goals (like high-protein or low-carb). They are also prompted to select a meal type (like breakfast or dinner), time-to-prepare limit, and tools available for preparation (like microwave or stove).   Next, the dietary criteria, classified ingredients, and corresponding nutritional facts are sent to the OpenAI API, and a personalized recipe is generated to match the user's needs. Finally, LetMeCook displays the recipe and step-by-step instructions for preparation onscreen.

## How we built it

## Challenges we ran into

## Accomplishments that we're proud of
We are proud to have recognized a very prevalent problem around us and engineered a seamless and powerful tool to solve it. We all enjoyed the bittersweet experience of discovering bugs, editing troublesome code, and staying up overnight working to overcome the various challenges we faced. Additionally, we are proud to have learned many new tools and technologies to create a successful mobile application. Ultimately, our efforts and determination culminated in an innovative, functional product we are all very proud of and excited to present. Lastly, we are proud to have created a product that could reduce food waste and revolutionize the home cooking space around the world.

## What we learned
First and foremost, we've learned the profound impact that technology can have on simplifying everyday challenges. In researching the problem, Our app has shown us that by harnessing computer vision, we can empower individuals from diverse backgrounds, including busy students, parents with dietary restrictions, and health-conscious enthusiasts, to easily create delicious and personalized meals from the ingredients they already have. Throughout the process of creating LetMeCook, we had to do a lot of research on the technologies we wanted to use and the actual processes related to the process of cooking. The hackathon has motivated us to learn a lot more about our respective technologies - whether it be new errors, or desired functions, new concepts and ideas had to be introduced to make the tech work.

## What's next for LetMeCook

---

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
