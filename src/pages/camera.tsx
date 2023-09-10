/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import Image from "next/image";
import Link from "next/link";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import {
  Box,
  SelectSeparator,
  Grid,
  Button,
  Flex,
  Text,
  Tooltip,
} from "@radix-ui/themes";
import {
  Frame,
  Camera,
  Focus,
  FlipHorizontal,
  RotateCcw,
  CameraOff,
  UserSquare,
  FileEdit,
} from "lucide-react";

import CameraButton from "../components/cameraButton";

export default function Camera() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [prevImg, setPrevImg] = useState(null);
  const [mirrored, setMirrored] = useState(false);
  const [imageSmoothing, setImageSmoothing] = useState(false);
  const [forceScreenshotSourceSize, setForceScreenshotSourceSize] =
    useState(false);
  const [facingMode, setFacingMode] = useState("environment");

  const videoConstraints = {
    facingMode: "environment",
  };

  const retake = () => {
    setImgSrc(null);
  };
  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc(imageSrc);
    setPrevImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className="font-primary flex h-screen w-full flex-col items-center justify-center gap-12">
      <Grid columns="4" gap="0" width="100%" height="100%">
        <Box className="bg-dark col-span-4 sm:col-span-3 ">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt="webcam"
              className="mx-auto h-full bg-black"
            />
          ) : (
            <Webcam
              className="mx-auto h-full bg-black"
              ref={webcamRef}
              mirrored={mirrored}
              imageSmoothing={imageSmoothing}
              forceScreenshotSourceSize={forceScreenshotSourceSize}
              screenshotFormat="image/jpeg"
              screenshotQuality={0.92}
              videoConstraints={{
                ...videoConstraints,
                facingMode,
              }}
            />
          )}
        </Box>
        <Box className="bg-light col-span-4 flex flex-col p-4 sm:col-span-1 sm:p-12 ">
          <h1 className="text-dark text-xl font-extrabold tracking-tight sm:text-5xl  ">
            SMILE <span className="text-primary">{":)"}</span>
          </h1>
          <SelectSeparator />
          <Flex gap="3">
            <CameraButton
              message="Mirror Image"
              state={!mirrored}
              setState={setMirrored}
              component={<FlipHorizontal />}
            />
            <CameraButton
              message="Flip Camera"
              state={facingMode === "user" ? "environment" : "user"}
              setState={setFacingMode}
              component={<UserSquare />}
            />
            <CameraButton
              message="Image Smoothing"
              state={!imageSmoothing}
              setState={setImageSmoothing}
              component={<Focus />}
            />
            <CameraButton
              message="Force Screenshot Source Size"
              state={!forceScreenshotSourceSize}
              setState={setForceScreenshotSourceSize}
              component={<Frame />}
            />
            <Tooltip content="Take another image">
              <button
                className="border-dark hover:bg-primary rounded-md border p-2 duration-150"
                onClick={() => retake()}
              >
                <RotateCcw />
              </button>
            </Tooltip>
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

          {prevImg ? (
            <Link
              href={
                "/customize?image=" +
                encodeURIComponent(prevImg).replace(/\+/g, "%20")
              }
              className="w-full"
            >
              <Button className="border-dark mt-2 w-full border">
                Customize <FileEdit className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Tooltip content="Take a picture to proceed.">
              <Button className="border-dark mt-2 border opacity-60">
                Customize <FileEdit className="h-4 w-4" />
              </Button>
            </Tooltip>
          )}
          {
            <div className="border-dark relative mt-2 hidden w-full items-center justify-center rounded-md border-2 border-dashed sm:mt-auto sm:flex">
              <Image
                src={prevImg ? prevImg : "/assets/defaultscreenshot.png"}
                className="w-full"
                height={100}
                width={100}
                alt="screenshot"
              />
              {!prevImg && <CameraOff className="absolute text-gray-300" />}
            </div>
          }
        </Box>
      </Grid>
    </div>
  );
}
