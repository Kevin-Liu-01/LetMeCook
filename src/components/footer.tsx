import Image from "next/image";
import { Section } from "@radix-ui/themes";
import React from "react";

export default function Footer() {
  return (
    <Section className="bg-secondary relative w-full flex-col overflow-hidden px-12">
      <Image
        src="/assets/letmecook.svg"
        className="relative z-10"
        alt="logo"
        width="300"
        height="300"
      />
      <Image
        src="/assets/table.jpg"
        className="bg-secondary z-5 absolute left-0 top-0 h-full w-full object-cover opacity-10"
        alt="logo"
        width="700"
        height="700"
      />
    </Section>
  );
}
