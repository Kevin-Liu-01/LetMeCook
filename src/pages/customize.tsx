// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import Head from "next/head";
import { useState } from "react";
import { Box, Grid } from "@radix-ui/themes";
import Form from "../components/form";

import { useSearchParams } from "next/navigation";

import Editor from "../components/editor";

export default function Customize() {
  const searchParams = useSearchParams();
  const [image, setImage] = useState(searchParams?.get("image"));
  const [cropped, setCropped] = useState(searchParams?.get("image"));

  return (
    <>
      <Head>
        <title>Customize your Recipe</title>
      </Head>
      <div className="font-primary flex h-screen w-full flex-col items-center justify-center gap-12">
        <Grid columns="2" gap="0" width="100%" height="100%">
          <Box className="from-primary to-secondary align-center col-span-2 flex h-screen flex-col justify-center bg-gradient-to-b p-6 sm:col-span-1 sm:p-12">
            <Form image={cropped} />
          </Box>

          <Box
            className="bg-light col-span-2 flex sm:col-span-1"
            // direction="column"
            // gap="2"
          >
            <Editor
              image={image ?? ""}
              setCropped={setCropped}
              setImage={setImage}
            />
          </Box>
        </Grid>
      </div>
    </>
  );
}
