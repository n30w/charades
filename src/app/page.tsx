import Introduction from "@/sections/introduction";
import dynamic from "next/dynamic";
import P5 from "p5";

const Sketch = dynamic(() => import("@/sketch/sketch"), { ssr: false });

export default function Home() {
  return (
    <main className="grid min-h-screen content-baseline justify-items-left ml-8">
      <h3 className="font-light">
        DISCLAIMER: unless stated otherwise, everything on this webpage,
        including the website&apos;s very code, has been written and edited by
        NEO ALABASTRO
      </h3>
      <h1>CHARADES</h1>
      {Introduction()}
      <Sketch />
    </main>
  );
}
