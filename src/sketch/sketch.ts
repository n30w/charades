import P5 from "p5";

export const sketch = (p5: P5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(1000, 1000);
    canvas.parent("p5Canvas");
    p5.background(255);
    p5.colorMode(p5.RGB, 255);

    // whenever the button is clicked, call sendMessage
    //@ts-ignore
    p5.select("#submit").mouseClicked(() => {
      sendMessage();
    });

    //@ts-ignore
    p5.select("#clearBoard").mouseClicked(() => {
      p5.clear(255, 255, 255, 0);
      guess = "";
      coords = [];
    });
  };

  p5.draw = () => {
    if (guess !== "") {
      p5.textSize(20);
      p5.fill(0);
      p5.text(guess, 1, 620);
    }
    if (p5.mouseIsPressed === true) {
      let x = p5.mouseX;
      let y = p5.mouseY;
      p5.fill(0);
      p5.noStroke();
      p5.ellipse(x, y, 20, 20);
      let pair: xyPair = { x: x, y: y };
      if (x <= p5.width && y <= p5.height) {
        coords.push(pair);
      }
    }
  };
};
