var gpiop = require('rpi-gpio').promise;

gpiop.setup(7, gpiop.DIR_OUT)
  .then(() => {
    return gpiop.write(5, true)
  })
  .catch((err) => {
    console.log('Error: ', err.toString())
  });
