export function initButtonComp() {
  customElements.define(
    "custom-button",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "button";

        style.innerHTML = `
            .button{
               background-color: #006CFC;
               border: 10px solid #001997;
               border-radius: 10px;
               width: 322px;
               height: 87px;
               color: #D8FCFC;
               font-size: 45px;
               font-family: odibee sans;
               margin: 0;
            }
            @media (min-width: 960px) {
              .button{
              width: 404px;
            }  
            `;

        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
      }
    }
  );
}
