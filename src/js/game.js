const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const courages = document.querySelectorAll('.courage');
let lastHole;
let timeUp = true;
let score = 0;

const randomTime = (min , max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = (holes) => {
  let id = Math.floor(Math.random()* holes.length);
  let hole = holes[id];
  if(hole === lastHole) {
    randomHole(holes);
  }
  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randomTime(500, 1500);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);

};

const startGame = () => {
  scoreBoard.textContent = "score: 0";
  timeUp = false;
  score = 0;
  peep();
  setTimeout( ()=> timeUp = true, 10000 );
};

const bonk = (e) => {
  if(!e.isTrusted) return;
  score += 1;
  (e.target).offsetParent.classList.remove('up');
  scoreBoard.textContent = "score: " + score;
};

courages.forEach(courage => courage.addEventListener('click', bonk));
