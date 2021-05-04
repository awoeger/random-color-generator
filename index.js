const randomColor = require('randomcolor');
const createColor = require('my-colors');

const getColoredOutput = (userInput) => {
  let hue = 'random';
  let luminosity = 'random';

  if (userInput[2]) {
    hue = userInput[2];
  }

  if (userInput[3]) {
    luminosity = userInput[3];
  }

  const ranColor = randomColor({
    luminosity: luminosity,
    hue: hue,
  });

  const coloredOutput = createColor(ranColor);
  const finishedOutput = coloredOutput(
    `
  ###############################
  ###############################
  ###############################
  #####    ${ranColor}           #####
  ###############################
  ###############################
  ###############################`,
  );

  return finishedOutput;
};

console.log(getColoredOutput(process.argv));
