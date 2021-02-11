// Values object
const attr = new function () {
  this.color = '#add8e6';
  this.randomColor = false;
  this.opacity = 0.5;
  this.scale = 1;
  this.preset = presets[0];
};


// Changeable properties
window.onload = function() {
  setValue();
  var gui = new dat.GUI({closeOnTop: true});
  gui.addColor(attr, 'color').onChange(setValue);
  gui.add(attr, 'randomColor').onChange(setValue);
  gui.add(attr, 'opacity', 0, 1).onChange(setValue);
  gui.add(attr, 'scale', 0.01, 5).onChange(setValue);
  gui.add(attr, 'preset', presets).onChange(setValue);
};

// How to change properties
function setValue() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = attr.color + Math.round(attr.opacity * 255).toString(16);

  clearInterval(timerId);
  if (eval('typeof ' + attr.preset + 'Setup') === 'function')
    eval(attr.preset + 'Setup');

  let fun = () => {
    if (attr.randomColor) 
      ctx.fillStyle = 'hsla(' + 360 * Math.random() + ', 60%, 70%, ' + attr.opacity + ')';
    eval(attr.preset)();
  }
  timerId = setTimer(fun);

  zoom = attr.scale;
}
  
