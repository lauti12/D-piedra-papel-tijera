import { state } from "../../state";
const papel = require("url:../../../src/img/papel.svg");
const piedra = require("url:../../../src/img/piedra.svg");
const tijera = require("url:../../../src/img/tijera.svg");

export function initVersusComp() {
  customElements.define(
    "custom-versus",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        const playerPlay = state.getState().game.myPlay;
        const computerPlay = state.getState().game.computerPlay;

        let playerImg = "";
        if (playerPlay == "papel") {
          playerImg = papel;
        } else if (playerPlay == "piedra") {
          playerImg = piedra;
        } else {
          playerImg = tijera;
        }

        let computerImg = "";
        if (computerPlay == "papel") {
          computerImg = papel;
        } else if (computerPlay == "piedra") {
          computerImg = piedra;
        } else {
          computerImg = tijera;
        }

        div.innerHTML = `
        <div class="versus-cont">
         <div class="img-cont">
          <img src="${computerImg}" class="img-computer" alt="">
         </div>
         <div class="img-cont">
          <img src="${playerImg}" class="img-player" alt="">
         </div>
        </div>
        `;
        style.innerHTML = `
        .versus-cont{
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-between;
         height: 100vh;
        }  
        
        .img-player{
         width: 171px;
         height: 331px;
         margin: 0;
        }

        .img-computer{
         width: 171px;
         height: 331px;
         margin: 0;
         transform: rotate(180deg)
        }        
        `;

        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
