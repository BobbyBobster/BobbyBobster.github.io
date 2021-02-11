const a = 1.4;
const b = 0.3;

let henonSetup = () => { x = y = 1; }
let henon = function () {
  for (let t = 0; t != 100; ++t) {
    let xn = 1 - a * x**2 + y;
    let yn = b * x;

    ctx.fillRect(300 * zoom * x + width / 2, 
                 800 * zoom * y + height / 2, 
                 1, 1);
    x = xn;
    y = yn;
  }
}

