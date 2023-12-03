import Introduction from "@/sections/introduction";
import dynamic from "next/dynamic";

const Demonstration = dynamic(() => import("@/sections/demonstration"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="grid min-h-screen content-baseline justify-items-left ml-8">
      <h2>
        a discussion of large language model imaginative and sensory
        capabilities
      </h2>
      <h1>what is a charade?</h1>
      <Introduction />
      <div>
        <Demonstration />
      </div>
    </main>
  );
}
