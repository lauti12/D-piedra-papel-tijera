import { Move, state } from "../../state";

export function initGamePage(params) {
  const div = document.createElement("div");
  div.className = "game-page";
  div.innerHTML = `
      <custom-counter class="game-counter" ></custom-counter>
      <custom-choices class="game-choices"></custom-choices>
        `;

  const counter = div.querySelector(".game-counter");
  const choice = div.querySelector(".game-choices");

  let choiceClicked = false;

  const myChoice = (myPlay: Move) => {
    const machineChoice = state.computerPlay();
    const currentState = state.getState();
    currentState.game.myPlay = myPlay;
    currentState.game.computerPlay = machineChoice;
    state.whoWins(myPlay, machineChoice);
    state.setState(currentState);
    choiceClicked = true;
  };

  choice?.addEventListener("piedra-clicked", () => myChoice("piedra"));
  choice?.addEventListener("papel-clicked", () => myChoice("papel"));
  choice?.addEventListener("tijera-clicked", () => myChoice("tijera"));

  counter?.addEventListener("counter-finish", () => {
    if (choiceClicked) {
      params.goTo("/versus");
    } else {
      counter.dispatchEvent(new CustomEvent("counter-restart"));
    }
  });

  return div;
}
