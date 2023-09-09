/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import Image from "next/image";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import {
  Box,
  SelectSeparator,
  Grid,
  Button,
  Flex,
  Text,
} from "@radix-ui/themes";
import {
  Frame,
  Camera,
  Focus,
  FlipHorizontal,
  RotateCcw,
  CameraOff,
  Scan,
} from "lucide-react";

export default function Camera() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [mirrored, setMirrored] = useState(false);
  const [imageSmoothing, setImageSmoothing] = useState(false);
  const [forceScreenshotSourceSize, setForceScreenshotSourceSize] =
    useState(false);

  const retake = () => {
    setImgSrc(null);
  };
  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div className="font-primary flex h-screen w-full flex-col items-center justify-center gap-12">
      <Grid columns="4" gap="0" width="100%" height="100%">
        <Box className="bg-dark col-span-4 sm:col-span-3 ">
          <Webcam
            className="mx-auto h-full bg-black"
            ref={webcamRef}
            mirrored={mirrored}
            imageSmoothing={imageSmoothing}
            forceScreenshotSourceSize={forceScreenshotSourceSize}
            screenshotFormat="image/jpeg"
            screenshotQuality={1}
          />
        </Box>
        <Box className="bg-light col-span-4 flex flex-col p-4 sm:col-span-1 sm:p-12 ">
          <h1 className="text-dark text-xl font-extrabold tracking-tight sm:text-5xl  ">
            SMILE <span className="text-primary">{":)"}</span>
          </h1>
          <SelectSeparator />
          <Flex gap="3">
            <button
              className="border-dark hover:bg-primary rounded-md border p-2 duration-150"
              onClick={() => setMirrored(!mirrored)}
            >
              <FlipHorizontal />
            </button>
            <button
              className="border-dark hover:bg-primary rounded-md border p-2 duration-150"
              onClick={() => setImageSmoothing(!imageSmoothing)}
            >
              <Focus />
            </button>
            <button
              className="border-dark hover:bg-primary rounded-md border p-2 duration-150"
              onClick={() =>
                setForceScreenshotSourceSize(!forceScreenshotSourceSize)
              }
            >
              <Frame />
            </button>
            <button
              className="border-dark hover:bg-primary rounded-md border p-2 duration-150"
              onClick={() => retake()}
            >
              <RotateCcw />
            </button>
          </Flex>

          <div className=" border-dark mt-2 flex flex-col justify-center rounded-md border p-4">
            <button
              onClick={capture}
              className="border-dark align-center mx-auto flex h-24 w-24 justify-center rounded-full border bg-white duration-150 hover:bg-slate-100"
            >
              <div className="border-dark mx-auto my-auto h-20 w-20 rounded-full border"></div>
            </button>
          </div>
          <SelectSeparator />
          <Text size="2" className="">
            Take a picture of your ingredients! Make sure they are all in frame
            and the lighting is good.
          </Text>
          <SelectSeparator />

          {imgSrc && (
            <Button className="border-dark mt-2 border">
              Scan <Scan className="h-4 w-4" />
            </Button>
          )}
          {
            <div className="border-dark relative mt-2 flex w-full items-center justify-center rounded-md border-2 border-dashed sm:mt-auto">
              <Image
                src={imgSrc ? imgSrc : "/assets/defaultscreenshot.png"}
                className="w-full"
                height={100}
                width={100}
                alt="screenshot"
              />
              {!imgSrc && <CameraOff className="absolute text-gray-300" />}
            </div>
          }
        </Box>
      </Grid>
    </div>
  );
}
