import { createParagraphs } from "@/components/paragraphs";
import { DisplaySketch } from "@/sketch/sketch";
import { demonstrationParagraph1 } from "@/text";

export default function Demonstration({ Sketch }: any) {
  return (
    <>
      <h2>let&apos;s do a small demonstration of vision</h2>
      {createParagraphs(demonstrationParagraph1)}
      <DisplaySketch proxyUrl="" />
      <button id="submit" value="Done">
        Submit
      </button>
      <button id="clearBoard">Clear</button>
    </>
  );
}
