import P5 from 'p5';

const sketch = (p5: P5) => 
{
  const width: number = 600;
  const height: number = 600;

  p5.setup = () => {
    p5.createCanvas(width, height);
  };

  p5.draw = () => 
  {
      p5.background("black");

      p5.stroke(255);
      p5.strokeWeight(24);
      p5.point(0, 300);
      p5.point(p5.mouseX, p5.mouseY);
      p5.point(400, 400);
      p5.point(600, 300);

      p5.strokeWeight(4);
      p5.noFill();
      p5.bezier(0, 300, p5.mouseX, p5.mouseY, 400, 400, 600, 300);

      p5.line(0, 300, p5.mouseX, p5.mouseY);
  };
};
const myp5 = new P5(sketch);