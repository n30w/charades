import { createDialogue } from "@/components/dialogue";
import Introduction from "@/sections/introduction";
import { conversation1 } from "@/text";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen content-baseline justify-items-left ml-8">
      <h3 className="font-light">
        DISCLAIMER: unless stated otherwise, everything on this webpage,
        including the website's very code, has been written and edited by NEO
        ALABASTRO
      </h3>
      <h1>CHARADES</h1>
      {Introduction()}
    </main>
  );
}
