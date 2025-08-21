import { state } from "../../state";
export function initScoreComp() {
  customElements.define(
    "custom-score",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const playerScore = state.getState().history.win;
        const machineScore = state.getState().history.lost;
        const style = document.createElement("style");

        div.innerHTML = `
         <div class="score-cont">
          <h3 class="score-title">Score</h3>
          <p class="score-text">Vos: ${playerScore}</p>
          <p class="score-text">Máquina: ${machineScore}</p>
         </div>
        `;
        style.innerHTML = `
        .score-cont{
         width: 259px;
         height: 219px;
         margin: 0;
         display: flex;
         flex-direction: column;
         background-color:#FFFFFF;
         border: 10px solid #000000;
         border-radius: 10px;
         font-family: odibee sans;
         }
        .score__title{
         color: #000000;
         font-size: 55px;
         margin:0;
         align-self: center;
        }   
        .score__text{
         color: #000000;
         font-size: 45px;
         margin:0;
         align-self: flex-end;
        }
        `;

        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
