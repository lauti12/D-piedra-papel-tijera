export function initWelcomePage(params) {
  const div = document.createElement("div");
  div.className = "welcome-page";
  div.innerHTML = `
      <custom-text variant="title" class="title">
      Piedra Papel o Tijera
      </custom-text>
      <custom-button class="welcome-button" >Empezar</custom-button>
      <custom-choices class="welcome-choices"></custom-choices>
        `;
  const startButtonEl = div.querySelector(".welcome-button");
  startButtonEl?.addEventListener("click", function () {
    params.goTo("/instructions");
  });
  return div;
}
