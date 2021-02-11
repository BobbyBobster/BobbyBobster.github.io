const sigma = 10.0 + (Math.random() - 1) * 4;
const rho = 28.0 + (Math.random() - 1) * 8;
const beta = 8.0 / 3.0 + (Math.random() - 1);

let lorenzSetup = () => { x = y = z = 1; }
let lorenz = function () {
    for (let t = 0; t != 1000; ++t) {
      let dx = sigma * (y - x);
      let dy = x * (rho - z) - y;
      let dz = x * y - beta * z;

      x += dx / 500;
      y += dy / 500;
      z += dz / 500;

      ctx.fillRect(10 * zoom * x + width / 2, 
                   10 * zoom * z + height / 4, 
                   1, 1);
    }
  }

