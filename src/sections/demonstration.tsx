/* eslint-disable react/no-unescaped-entities */
//prettier-ignore
'use client'

import { createParagraphs } from "@/components/paragraphs";
import TypeBox from "@/components/typebox";
import { DisplaySketch } from "@/sketch/sketch";
import { demonstrationParagraph1, demonstrationParagraph2 } from "@/text";
import { useState } from "react";

export default function Demonstration() {
  const [userInput, setUserInput] = useState<string>("");

  const handleInputChange = (input: string) => {
    setUserInput(input);
  };

  return (
    <>
      <div>
        <section className="max-w-96">
          <h2>let&apos;s do a small demonstration of imagination</h2>
          {createParagraphs(demonstrationParagraph1)}
        </section>
      </div>
      <div>
        <section className="grid grid-cols-2">
          <div>
            <h4>
              We are now playing Charades. I'm going to give you a list of x and
              y coordinate points, in parentheses pair format, similar to
              cartesian coordinates. (0,0) is placed at the top left of the
              canvas and (600, 600) is at the bottom right. Imagine that the
              order in which the points are given connect to make something.
              Given those coordinates, please give me your guess of the figure
              or graphic that the coordinates construct. You have to make a
              guess, and you can't say that its not possible to determine the
              shape. Just tell me what it looks like. Don't tell me that you
              don't know or if its impossible to know. Remember that you have to
              guess, because its a game! Only tell me your answer with no
              explanation. Here are the coordinates:
            </h4>
            <TypeBox onInputChange={handleInputChange} />
            <div className="flex flex-initial">
              <button id="submit" value="Done">
                Submit
              </button>
              <button id="clearBoard">Clear</button>
            </div>
          </div>
          <div>
            <div id="sketchFrame">
              <DisplaySketch proxyUrl={userInput} />
            </div>
          </div>
        </section>
      </div>
      <div>{createParagraphs(demonstrationParagraph2)}</div>
    </>
  );
}
