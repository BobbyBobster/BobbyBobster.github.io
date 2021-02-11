let u = 0.61;

let ikedaSetup = () => { x = y = 1; }
let drawIkeda = function (xinit, yinit) {
  for (let t = 0; t != 2000; ++t) {
    let temp = 0.4 - 6.0 / (1.0 + x * x + y * y);
    let sint = Math.sin(temp);
    let cost = Math.cos(temp);
    let xn = 1 + u * (x * cost - y * sint);
    let yn = u * (x * sint + y * cost);

    ctx.fillRect(75 * zoom * x + width / 2, 
                 75 * zoom * y + height / 2, 
                 1, 1);

    x = xn;
    y = yn;
  }
}
let ikeda = function () {
  let xinit = 0.0 - Math.random();
  let yinit = 0.0 - Math.random();
  if (u < 1.05)
    u += 0.001;

  drawIkeda(xinit, yinit);
}

