export function initTextComp() {
  customElements.define(
    "custom-text",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const variant = this.getAttribute("variant") || "";
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        style.innerHTML = `
            .title{
             color: #009048;
             font-size: 80px;
             margin: 0;
             width: 308px;
             height: 219px;
            }
            .body{
             color: #000000;
             font-size: 40px;
             margin: 0;
             width: 317px;
             height: 240px;
             text-align: center;
            }
            `;

        div.className = variant;
        div.textContent = this.textContent;
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
