const randomColor = require('randomcolor');
const createColor = require('my-colors');
const ps = require('prompt-sync');

const getColoredOutput = (userInput) => {
  let hue = 'random';
  let luminosity = 'random';
  const prompt = ps();

  // Check if user puts in hue
  hue = process.argv[2];

  // Check if user puts in luminosity
  luminosity = process.argv[3];

  // Asking user with prompt to put in hue and luminosity
  if (userInput[2] === 'ask') {
    hue = prompt('Enter hue ');
    luminosity = prompt('Enter luminosity ');
  }

  // Getting colored output with given hue and luminosity
  const ranColor = randomColor({
    luminosity: luminosity,
    hue: hue,
  });

  const coloredOutput = createColor(ranColor);
  const finishedOutput = coloredOutput(
    `  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       ${ranColor}       #####
  #####                     #####
  ###############################
  ###############################
  ###############################`,
  );

  return finishedOutput;
};

console.log(getColoredOutput(process.argv));
