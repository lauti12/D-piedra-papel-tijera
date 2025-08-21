const starWin = require("url:../../../src/img/win.svg");
const starLost = require("url:../../../src/img/lost.svg");
const starTie = require("url:../../../src/img/tie.png");
import { state } from "../../state";

export function initStarComp() {
  customElements.define(
    "custom-star",
    class extends HTMLElement {
      result: "win" | "lost" | "tie" = "tie";
      shadow: ShadowRoot;
      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.render();
      }
      setResult(result: "win" | "lost" | "tie") {
        this.result = result;
        this.render();
      }
      render() {
        const starImg =
          this.result === "win"
            ? starWin
            : this.result === "lost"
            ? starLost
            : starTie;

        this.shadow.innerHTML = `
         <div class="star-cont">
          <img src="${starImg}" class="star-img">
         </div>
       
         <style>
         .star-cont{
           width: 255px;
           height: 260px;
           position: relative;
         }
         .star-img{
           position: absolute;
         } 
         <style> 
        `;
      }
    }
  );
}
