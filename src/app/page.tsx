import { createDialogue } from "@/components/dialogue";
import Introduction from "@/sections/introduction";
import { conversation1 } from "@/text";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen content-baseline justify-items-center">
      <h1 className="pb-4 pt-8">CHARADES</h1>
      {Introduction()}
    </main>
  );
}
