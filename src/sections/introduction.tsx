import { createDialogue } from "@/components/dialogue";
import { createParagraphs } from "@/components/paragraphs";
import { conversation1, introParagraph1, introParagraph2 } from "@/text";

export default function Introduction() {
  return (
    <>
      <div id="intro-container">
        <div className="flex-none">{createDialogue(conversation1)}</div>
      </div>
      {createParagraphs(introParagraph1)}
      {createParagraphs(introParagraph2)}
    </>
  );
}
