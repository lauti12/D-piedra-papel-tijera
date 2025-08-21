const papel = require("url:../../../src/img/papel.svg");
const piedra = require("url:../../../src/img/piedra.svg");
const tijera = require("url:../../../src/img/tijera.svg");

export function initChoicesComp() {
  customElements.define(
    "custom-choices",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        div.innerHTML = `
        <div class="choices-cont">
         <div class="tijera-cont">
          <img src="${tijera}" class="tijera" alt="">
         </div>
         <div class="piedra-cont">
          <img src="${piedra}" class="piedra" alt="">
         </div>
         <div class="papel-cont">
          <img src="${papel}" class="papel" alt="">
         </div>
        </div> 
       `;
        style.innerHTML = `
         .choices-cont{
           display: flex;
           flex-direction: row;
           gap: 44px;
           margin: 0;
           height: 126px;
           position: relative;
         }
         .tijera-cont,
          piedra-cont,
          papel-cont{
           position: relative;
          } 
        `;

        shadow.appendChild(div);
        shadow.appendChild(style);

        const choicePiedra = shadow.querySelector(".piedra");
        const choicePapel = shadow.querySelector(".papel");
        const choiceTijera = shadow.querySelector(".tijera");
        const contPiedra: any = shadow.querySelector(".piedra-cont");
        const contPapel: any = shadow.querySelector(".papel-cont");
        const contTijera: any = shadow.querySelector(".tijera-cont");

        choicePiedra?.addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("piedra-clicked", { bubbles: true, composed: true })
          );
        });

        choicePapel?.addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("papel-clicked", { bubbles: true, composed: true })
          );
        });

        choiceTijera?.addEventListener("click", () => {
          this.dispatchEvent(
            new CustomEvent("tijera-clicked", { bubbles: true, composed: true })
          );
        });

        this.addEventListener("piedra-clicked", () => {
          contPiedra.style.transform = "translateY(-30px)";
          contPapel.style.opacity = "0.5";
          contTijera.style.opacity = "0.5";
        });
        this.addEventListener("papel-clicked", () => {
          contPapel.style.transform = "translateY(-30px)";
          contPiedra.style.opacity = "0.5";
          contTijera.style.opacity = "0.5";
        });
        this.addEventListener("tijera-clicked", () => {
          contTijera.style.transform = "translateY(-30px)";
          contPapel.style.opacity = "0.5";
          contPiedra.style.opacity = "0.5";
        });
      }
    }
  );
}
