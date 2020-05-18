      const canvas = document.querySelector('#canvas');
      const ctx = canvas.getContext('2d');

      const epsilon = 0.0;
      const k = 1.5;
      const mu = 0.0;

      let drawBogdanov = function (xn, yn) {
        for (let t = 0; t != 2000; ++t) {
          let y = yn + epsilon * yn + k * xn * (xn - 1) + mu * xn * yn;
          let x = xn + y;

          ctx.fillRect(500 * x + 300, 500 * y + 300, 1, 1);

          yn = y;
          xn = x;
        }
      }

      setInterval(
        function () {
            let xinit = 0.0 + Math.random();
            let yinit = 0.0 + Math.random();
            let color = 360 * Math.random();
            ctx.fillStyle = 'hsla(' + color + ', 60%, 70%, 0.5)';
            drawBogdanov(xinit, yinit);
        },
        100
      );

