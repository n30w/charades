//prettier-ignore
'use client'

import P5 from "p5";
import { useEffect } from "react";

const P5Sketch = () => {
  useEffect(() => {
    const p5 = require("p5");

    new p5((p: P5) => {
      let guess = "";
      let coords: Array<xyPair> = [];
      p.setup = () => {
        //@ts-ignore
        p.createCanvas(600, 600);
        // canvas.parent("p5Canvas");
        p.background(255);
        p.colorMode(p.RGB, 255);

        // whenever the button is clicked, call sendMessage
        //@ts-ignore
        p.select("#submit").mouseClicked(() => {
          sendMessage();
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
    });
  });

  return (
    <>
      {/* //@ts-ignore */}
      <button id="submit" value="Done">
        Submit
      </button>
      <button id="clearBoard">Clear</button>
    </>
  );
};
// const P5Sketch = (p: P5) => {
//   let guess = "";
//   p.setup = () => {
//     //@ts-ignore
//     p.createCanvas(1000, 1000);
//     // canvas.parent("p5Canvas");
//     p.background(255);
//     p.colorMode(p.RGB, 255);

//     // whenever the button is clicked, call sendMessage
//     //@ts-ignore
//     p.select("#submit").mouseClicked(() => {
//       sendMessage();
//     });

//     //@ts-ignore
//     p.select("#clearBoard").mouseClicked(() => {
//       p.clear(255, 255, 255, 0);
//       guess = "";
//       coords = [];
//     });
//   };

//   p.draw = () => {
//     if (guess !== "") {
//       p.textSize(20);
//       p.fill(0);
//       p.text(guess, 1, 620);
//     }
//     if (p.mouseIsPressed === true) {
//       let x = p.mouseX;
//       let y = p.mouseY;
//       p.fill(0);
//       p.noStroke();
//       p.ellipse(x, y, 20, 20);
//       let pair: xyPair = { x: x, y: y };
//       if (x <= p.width && y <= p.height) {
//         coords.push(pair);
//       }
//     }
//   };

//   return (
//     <>
//       {/* //@ts-ignore */}
//       <button id="submit" value="Done">
//         Submit
//       </button>
//       <button id="clearBoard">Clear</button>
//     </>
//   );
// };
export default P5Sketch;
