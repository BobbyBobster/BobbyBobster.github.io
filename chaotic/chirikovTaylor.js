const K = 5;
let qn = pn = 1;
let chirikovTaylor = function () {
  for (let t = 0; t != 500; ++t) {
    let p = pn + K * Math.sin(qn);
    let q = qn + p;

    ctx.fillRect(zoom * 40 * q + width / 2, 
                 zoom * 40 * p + height / 2, 
                 1, 1);

    pn = p % (2 * Math.PI);
    qn = q % (2 * Math.PI);
  }
}

