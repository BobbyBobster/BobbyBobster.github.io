function drawMandelbrotJS() {
  const timestart = Date.now();
  const canvas = document.querySelector('#canvasjs');
  const ctx = canvas.getContext('2d');

  const width = canvas.width;
  const height = canvas.height;

  const colors = [
    [66, 30, 15],
    [25, 7, 26],
    [9, 1, 47],
    [4, 4, 73],
    [0, 7, 100],
    [12, 44, 138],
    [24, 82, 177],
    [57, 125, 209],
    [134, 181, 229],
    [211, 236, 248],
    [241, 233, 191],
    [248, 201, 95],
    [255, 170, 0],
    [204, 128, 0],
    [153, 87, 0],
    [106, 52, 3]
  ];

  const zoominit = 300;
  const xinit = width / 2;
  const yinit = height / 2;

  (function (xmid=xinit, ymid=yinit, zoom=zoominit, max_iter=300) {
    for (let px = 0; px != width; ++px)
      for (let py = 0; py != height; ++py) {
        const xnull = (px - xmid) / zoom;
        const ynull = (py - ymid) / zoom;
        let x = 0.0;
        let y = 0.0;
        let iter = 0;

        while (x**2 + y**2 <= 2*2 && iter < max_iter) {
          xtemp = x**2 - y**2 + xnull;
          y = 2 * x * y + ynull;
          x = xtemp;
          ++iter;
        }
        if (iter === max_iter || iter === 0)
          ctx.fillStyle = 'rgb(0, 0, 0)';
        else
        {
          const idx = iter % 16;
          const color = colors[idx];
          ctx.fillStyle = 'rgb(' + color[0] + ', ' + color[1] + ', ' + 
                            color[2] + ')';
        }
        ctx.fillRect(px, py, 1, 1);
      }
  })();
  const timetaken = Date.now() - timestart;
  document.querySelector('#js-results').textContent = 
        "JS version took " + timetaken + " milliseconds";
}
