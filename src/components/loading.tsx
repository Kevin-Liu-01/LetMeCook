import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const Loading = () => {
  const messages = [
    "COOKING UP YOUR RECIPE...",
    "PREPARING INGREDIENTS...",
    "WRITING INSTRUCTIONS...",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="to-primary from-secondary font-primary relative flex h-screen w-full flex-col items-center justify-center gap-12 bg-gradient-to-b">
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center">
          <Loader2 className="text-dark bg-secondary h-36 w-36 animate-spin rounded-full" />
          <Image
            src="/assets/letmecookicon.svg"
            className="absolute"
            alt="logo"
            width="50"
            height="50"
          />
        </div>
        <div className="pt-4 text-center text-3xl font-bold text-black">
          {messages[messageIndex]}
        </div>
      </div>
      <Image
        src="/assets/cooking.gif"
        className="z-5 absolute left-0 top-0 h-full w-full object-cover opacity-30"
        alt="logo"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Loading;
