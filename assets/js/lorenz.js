const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = #add8e680;

const sigma = 10.0 + (Math.random() - 1) * 4;
const rho = 28.0 + (Math.random() - 1) * 8;
const beta = 8.0 / 3.0 + (Math.random() - 1);
let x = y = z = 1;

setInterval(
  function () {
    for (let t = 0; t != 1000; ++t) {
      let dx = sigma * (y - x);
      let dy = x * (rho - z) - y;
      let dz = x * y - beta * z;

      x += dx / 500;
      y += dy / 500;
      z += dz / 500;

      ctx.fillRect(10 * x + 300, 10 * z + 100, 1, 1);
    }
  },
  100
);

