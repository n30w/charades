//prettier-ignore
'use client'

import P5 from "p5";
import { useEffect, useId } from "react";
import { sendMessage, xyPair } from "./data";

// This file is a combination of:
// https://www.lloydatkinson.net/posts/2022/how-to-prevent-a-duplicated-canvas-when-using-p5-and-react-strict-mode/
// and
// https://shivanshbakshi.dev/blog/p5-react/integrate-p5-with-react/#adding-react-p5

type SketchCleanup = { cleanup: () => void };

const visualization = ({ proxyUrl }: { proxyUrl: string }): SketchCleanup => {
  const sketch = (p: P5) => {
    let guess = "";
    let coords: Array<xyPair> = [];
    p.setup = () => {
      //@ts-ignore
      p.createCanvas(600, 600);
      // canvas.parent("p5Canvas");
      p.background(255);
      p.colorMode(p.RGB, 255);

      //@ts-ignore
      p.select("#submit").mouseClicked(() => {
        guess = sendMessage(coords, proxyUrl);
      });

      //@ts-ignore
      p.select("#clearBoard").mouseClicked(() => {
        p.clear(255, 255, 255, 0);
        guess = "";
        coords = [];
      });
    };

    p.draw = () => {
      if (guess !== "") {
        p.textSize(20);
        p.fill(0);
        p.text(guess, 1, 620);
      }
      if (p.mouseIsPressed === true) {
        let x = p.mouseX;
        let y = p.mouseY;
        p.fill(0);
        p.noStroke();
        p.ellipse(x, y, 20, 20);
        let pair: xyPair = { x: x, y: y };
        if (x <= p.width && y <= p.height) {
          coords.push(pair);
        }
      }
    };
  };

  const p5 = new P5(sketch);

  return {
    cleanup: p5.remove,
  };

  const P5Sketch = () => {
    useEffect(() => {
      const p5 = require("p5");

      new p5((p: P5) => {});
    });
  };
};

export const DisplaySketch = ({ proxyUrl }: { proxyUrl: string }) => {
  const id = useId();

  useEffect(() => {
    const { cleanup } = visualization({ proxyUrl });

    return cleanup;
  });

  return <div id={id}></div>;
};
