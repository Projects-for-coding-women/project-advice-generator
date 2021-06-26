let advice = [
  "Be a strong woman so your daughter will have a role model and your son will know what to look for in a woman when he’s a man.",
  "You really have to look inside yourself and find your own inner strength, and say, I’m proud of what I am and who I am.",
  "No matter what kind of challenges you go through in your life, we all have something within us that we can find the inner strength to get through them.",
  "Go within every day and find the inner strength so that the world will not blow your candle out.",
  "Fight for the things that you care about, but do it in a way that will lead others to join you.",
  "Don’t be afraid. Be focused. Be determined. Be hopeful. Be empowered."
]

let adviceText = ""
let adviceBox = document.querySelector(".advice-display")
let adviceButton = document.querySelector(".advice-button");
adviceButton.addEventListener("click", newAdvice);

function startApp() {
  return adviceBox.innerText = "Welcome! \n Would you like some new advice?"
}

function newAdvice() {
  let randomNumber = Math.floor(Math.random() * (advice.length))
  adviceText = advice[randomNumber];
  return adviceBox.innerText = adviceText
}


startApp()