import { createDialogue } from "@/components/dialogue";
import { createParagraphs } from "@/components/paragraphs";
import { conversation1, introParagraph } from "@/text";

export default function Introduction() {
  return (
    <>
      <div id="intro-container">
        <div className="flex-none">{createDialogue(conversation1)}</div>
      </div>
      <p>Figure 1: What is a charade?</p>
      {createParagraphs(introParagraph)}
    </>
  );
}
