const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const scoreEl = document.getElementById("score");
const input = document.getElementById("input");
const question = document.getElementById("question");
const form = document.getElementById("form");

const result = num1 * num2;

question.innerText = `What is ${num1} multiplies ${num2}`;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

form.addEventListener("submit", () => {
  const answer = +input.value;
  if (answer === result) {
    score++;
    updateScore();
  } else {
    score--;
    updateScore();
  }
});

const updateScore = () => {
  localStorage.setItem("score", JSON.stringify(score));
};

scoreEl.innerText = `score: ${score}`;
