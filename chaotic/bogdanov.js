const epsilon = 0.0;
const k = 1.5;
const mu = 0.0;

let drawBogdanov = function (xn, yn) {
  for (let t = 0; t != 2000; ++t) {
    let y = yn + epsilon * yn + k * xn * (xn - 1) + mu * xn * yn;
    let x = xn + y;

    ctx.fillRect(400 * zoom * x + width / 2, 
                 400 * zoom * y + height / 2, 
                 1, 1);

    yn = y;
    xn = x;
  }
}
let bogdanov = () => {
  let xinit = 0.0 + Math.random();
  let yinit = 0.0 + Math.random();

  drawBogdanov(xinit, yinit);
}
