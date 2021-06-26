
let adviceBox = document.querySelector(".advice-display");

function startApp() {
  return (adviceBox.innerText = "Welcome! \n Would you like some new advice?");
}

function getApiAdvice() {
let apiAdvice = fetch("https://api.adviceslip.com/advice")
  .then((result) => result.json())
  .then((data) => {
    let adviceText = data.slip.advice
    adviceBox.innerText = adviceText
    console.log(adviceText)})
  .catch((err) => {
    console.log("Something has gone wrong");
  });
}
let adviceButton = document.querySelector(".advice-button");
adviceButton.addEventListener("click", getApiAdvice);

startApp();
