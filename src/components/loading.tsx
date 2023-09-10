import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="bg-primary font-primary flex h-screen w-full flex-col items-center justify-center gap-12">
      <Image
        src="/assets/letmecookicon.svg"
        className="bg-secondary"
        alt="logo"
        width="100"
        height="100"
      />
    </div>
  );
}
