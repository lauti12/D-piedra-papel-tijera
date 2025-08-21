import { state } from "../../state";

export function initResultPage(params) {
  const div = document.createElement("div");
  div.className = "result-page";
  div.innerHTML = `
    <custom-versus class="versus"></custom-versus>
    <div class="result-cont">
      <custom-star class="star"></custom-star>
      <custom-score></custom-score>
      <custom-button class="button">Volver a Jugar</custom-button>
    </div>
    `;
  const starComp = div.querySelector(".star") as any;

  const { game } = state.getState();
  const myPlay = game.myPlay;
  const pc = game.computerPlay;

  let result: "win" | "lost" | "tie" = "tie";
  if (myPlay === pc) result = "tie";
  else if (
    (myPlay === "tijera" && pc === "papel") ||
    (myPlay === "piedra" && pc === "tijera") ||
    (myPlay === "papel" && pc === "piedra")
  )
    result = "win";
  else result = "lost";

  starComp?.setResult(result);

  const background =
    result === "win"
      ? "#888949E5"
      : result === "lost"
      ? "#894949E5"
      : "#808080E5";
  document.documentElement.style.setProperty("--page-background", background);

  const buttonComp = div.querySelector(".button");
  buttonComp?.addEventListener("click", () => {
    params.goTo("/instructions");
  });

  return div;
}
