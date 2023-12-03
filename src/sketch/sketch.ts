import P5 from "p5";

export const sketch = (p5: P5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(1000, 1000);
    canvas.parent("p5Canvas");
    p5.background(255);
    p5.colorMode(p5.RGB, 255);
  };

  p5.draw = () => {};
};
