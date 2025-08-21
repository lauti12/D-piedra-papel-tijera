const img1 = require("url:../../../src/img/count1.png");
const img2 = require("url:../../../src/img/count2.png");
const img3 = require("url:../../../src/img/count3.png");
const imagenes = [img3, img2, img1];

export function initCounterComp() {
  customElements.define(
    "custom-counter",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        div.classList.add("counter-cont");
        const style = document.createElement("style");
        const imgEl = document.createElement("img");
        imgEl.classList.add("img-count");
        let count = 3;

        const startCountDown = () => {
          count = 3;
          imgEl.src = imagenes[0];
          const countDownUpdate = setInterval(() => {
            count--;
            if (count > 0) {
              imgEl.src = imagenes[3 - count];
            } else {
              clearInterval(countDownUpdate);
              this.dispatchEvent(new CustomEvent("counter-finish"));
            }
          }, 1000);
        };
        startCountDown();

        this.addEventListener("counter-restart", () => {
          startCountDown();
        });

        style.innerHTML = `
        .counter-cont{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .img-count{
          width: 243px;
          height: 243px;
          margin: 0;
        }
        `;

        div.appendChild(imgEl);
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
