//  Webpack requires immport of all files, to be analyzed,
//  Imprtant
// import path'es are relative to  "entry"; './src/js/app.js' property of  module.exports  in webpack.config.js

import "../css/main.scss";
import { RandomGenerator} from  './random-generator';  // no '.ls' extention  required

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);
