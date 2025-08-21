export function initInstructionsPage(params) {
  const div = document.createElement("div");
  div.className = "instructions-page";
  div.innerHTML = `
      <custom-text variant="body" class="body">
      Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
      </custom-text>
      <custom-button class="instructions-button" >¡Jugar!</custom-button>
      <custom-choices class="instructions-choices"></custom-choices>
        `;
  const instructionsButtonEl = div.querySelector(".instructions-button");
  instructionsButtonEl?.addEventListener("click", function () {
    params.goTo("/game");
  });
  return div;
}
