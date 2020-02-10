/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
let buttons = document.getElementsByClassName('colorButton');
let heading;
heading = document.getElementById('colorValue');
heading.innerHTML = '- - - - - -';

// Changes the background of a button
const setButtonColor = (button, red, blue, green) => {
  button.setAttribute('style',
    `background-color: rgb(${red}, ${blue}, ${green});`
  );
};

// Creates a color value between 0 and 255
const makeColor = () => Math.round(Math.random() * 255);

let answerMessage = document.getElementById('answer');


const startGame = () => {
  answerMessage.innerHTML = "- - - - - - - - -";
  // Picking the answer
  let answerButton = Math.round(Math.random() * (buttons.length - 1));

  // Change the color of all buttons
  for (let i = 0; i < buttons.length; i++) {
    // Color variables
    let red = makeColor();
    let blue = makeColor();
    let green = makeColor();
    setButtonColor(buttons[i], red,  blue, green);

    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }

    buttons[i].addEventListener('click', (function(){
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "Correct!";
        } else {
            answerMessage.innerHTML = "Wrong answer! Guess again!";
        }
    }));
  }
};

startGame();

document.getElementById('reset-button').addEventListener(
  'click', startGame
);
