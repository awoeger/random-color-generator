const randomColor = require('randomcolor');
const createColor = require('my-colors');
const ps = require('prompt-sync');

const getColoredOutput = (userInput) => {
  let hue = 'random';
  let luminosity = 'random';
  const prompt = ps();

  // Check if user puts in hue
  if (userInput[2]) {
    hue = userInput[2];
  }
  // Check if user puts in luminosity
  if (userInput[3]) {
    luminosity = userInput[3];
  }
  // Asking user with prompt to put in hue and luminosity
  if (userInput[2] === 'ask') {
    const answerHue = prompt('Enter hue ');
    const answerLuminosity = prompt('Enter luminosity ');
    hue = `${answerHue}`;
    luminosity = `${answerLuminosity}`;
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
