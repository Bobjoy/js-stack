const Color = require('color');

const redHexa = Color({ r: 255, g: 0, b: 0 }).rgb().string();

console.log(redHexa);