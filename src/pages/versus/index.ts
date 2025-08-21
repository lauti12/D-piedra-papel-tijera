export function initVersusPage(params) {
  const div = document.createElement("div");
  div.className = "versus-page";
  div.innerHTML = `
      <custom-versus class="versus-cont"></custom-versus>
        `;

  let count = 3;
  const countDownUpdate = setInterval(() => {
    if (count > 0) {
      count--;
    } else {
      clearInterval(countDownUpdate);
      params.goTo("/result");
    }
  }, 1000);

  return div;
}
