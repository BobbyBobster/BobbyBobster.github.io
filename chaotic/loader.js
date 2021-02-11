// Load in each of the preset attractors
presets.forEach((item) => {
  let script = document.createElement('script');
  script.src = item + '.js'
  script.async = true;
  document.querySelector('body').appendChild(script);
});

