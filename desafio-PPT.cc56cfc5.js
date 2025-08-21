const e={data:{game:{computerPlay:"",myPlay:""},history:{win:0,lost:0,tie:0}},listeners:[],init(){this.setState(this.data)},getState(){return this.data},setState(e){for(let t of(this.game=e.game,this.listeners))t(e)},subscribe(e){this.listeners.push(e)},whoWins(e,t){let s=this.getState(),o="tijera"==e&&"papel"==t||"piedra"==e&&"tijera"==t||"papel"==e&&"piedra"==t;return o?s.history.win++:"tijera"==e&&"piedra"==t||"piedra"==e&&"papel"==t||"papel"==e&&"tijera"==t?s.history.lost++:s.history.tie++,this.setState(s),e==t?"tie":o?"win":"lost"},computerPlay(){let e=["piedra","papel","tijera"];return e[Math.floor(Math.random()*e.length)]}};var t={};t=import.meta.resolve("gbbBF");var s={};s=import.meta.resolve("2a7oR");const o=[import.meta.resolve("74o19"),s,t];var n={};n=import.meta.resolve("1Rgbz");var i={};i=import.meta.resolve("bZ8PG");var r={};r=import.meta.resolve("lvGNC");var a={};a=import.meta.resolve("lcS8G");var c={};c=import.meta.resolve("QphNf");var l={};l=import.meta.resolve("jEbsN");const d=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");t.className="welcome-page",t.innerHTML=`
      <custom-text variant="title" class="title">
      Piedra Papel o Tijera
      </custom-text>
      <custom-button class="welcome-button" >Empezar</custom-button>
      <custom-choices class="welcome-choices"></custom-choices>
        `;let s=t.querySelector(".welcome-button");return s?.addEventListener("click",function(){e.goTo("/instructions")}),t}},{path:/\/instructions/,component:function(e){let t=document.createElement("div");t.className="instructions-page",t.innerHTML=`
      <custom-text variant="body" class="body">
      Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
      </custom-text>
      <custom-button class="instructions-button" >\xa1Jugar!</custom-button>
      <custom-choices class="instructions-choices"></custom-choices>
        `;let s=t.querySelector(".instructions-button");return s?.addEventListener("click",function(){e.goTo("/game")}),t}},{path:/\/game/,component:function(t){let s=document.createElement("div");s.className="game-page",s.innerHTML=`
      <custom-counter class="game-counter" ></custom-counter>
      <custom-choices class="game-choices"></custom-choices>
        `;let o=s.querySelector(".game-counter"),n=s.querySelector(".game-choices"),i=!1,r=t=>{let s=e.computerPlay(),o=e.getState();o.game.myPlay=t,o.game.computerPlay=s,e.whoWins(t,s),e.setState(o),i=!0};return n?.addEventListener("piedra-clicked",()=>r("piedra")),n?.addEventListener("papel-clicked",()=>r("papel")),n?.addEventListener("tijera-clicked",()=>r("tijera")),o?.addEventListener("counter-finish",()=>{i?t.goTo("/versus"):o.dispatchEvent(new CustomEvent("counter-restart"))}),s}},{path:/\/versus/,component:function(e){let t=document.createElement("div");t.className="versus-page",t.innerHTML=`
      <custom-versus class="versus-cont"></custom-versus>
        `;let s=3,o=setInterval(()=>{s>0?s--:(clearInterval(o),e.goTo("/result"))},1e3);return t}},{path:/\/result/,component:function(t){let s=document.createElement("div");s.className="result-page",s.innerHTML=`
    <custom-versus class="versus"></custom-versus>
    <div class="result-cont">
      <custom-star class="star"></custom-star>
      <custom-score></custom-score>
      <custom-button class="button">Volver a Jugar</custom-button>
    </div>
    `;let o=s.querySelector(".star"),{game:n}=e.getState(),i=n.myPlay,r=n.computerPlay,a="tie";a=i===r?"tie":"tijera"===i&&"papel"===r||"piedra"===i&&"tijera"===r||"papel"===i&&"piedra"===r?"win":"lost",o?.setResult(a);let c="win"===a?"#888949E5":"lost"===a?"#894949E5":"#808080E5";document.documentElement.style.setProperty("--page-background",c);let l=s.querySelector(".button");return l?.addEventListener("click",()=>{t.goTo("/instructions")}),s}}],m="/D-piedra-papel-tijera";function u(){return location.host.includes("github.io")}customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("button"),s=document.createElement("style");t.className="button",s.innerHTML=`
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
            `,t.textContent=this.textContent,e.appendChild(t),e.appendChild(s)}}),customElements.define("custom-text",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.getAttribute("variant")||"",t=this.attachShadow({mode:"open"}),s=document.createElement("div"),o=document.createElement("style");o.innerHTML=`
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
            `,s.className=e,s.textContent=this.textContent,t.appendChild(s),t.appendChild(o)}}),customElements.define("custom-score",class extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),s=document.createElement("div"),o=e.getState().history.win,n=e.getState().history.lost,i=document.createElement("style");s.innerHTML=`
         <div class="score-cont">
          <h3 class="score-title">Score</h3>
          <p class="score-text">Vos: ${o}</p>
          <p class="score-text">M\xe1quina: ${n}</p>
         </div>
        `,i.innerHTML=`
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
        `,t.appendChild(s),t.appendChild(i)}}),customElements.define("custom-counter",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("counter-cont");let s=document.createElement("style"),n=document.createElement("img");n.classList.add("img-count");let i=3,r=()=>{i=3,n.src=o[0];let e=setInterval(()=>{--i>0?n.src=o[3-i]:(clearInterval(e),this.dispatchEvent(new CustomEvent("counter-finish")))},1e3)};r(),this.addEventListener("counter-restart",()=>{r()}),s.innerHTML=`
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
        `,t.appendChild(n),e.appendChild(t),e.appendChild(s)}}),customElements.define("custom-star",class extends HTMLElement{constructor(){super(),this.result="tie",this.shadow=this.attachShadow({mode:"open"}),this.render()}setResult(e){this.result=e,this.render()}render(){let e="win"===this.result?n:"lost"===this.result?i:r;this.shadow.innerHTML=`
         <div class="star-cont">
          <img src="${e}" class="star-img">
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
        `}}),customElements.define("custom-choices",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),s=document.createElement("style");t.innerHTML=`
        <div class="choices-cont">
         <div class="tijera-cont">
          <img src="${l}" class="tijera" alt="">
         </div>
         <div class="piedra-cont">
          <img src="${c}" class="piedra" alt="">
         </div>
         <div class="papel-cont">
          <img src="${a}" class="papel" alt="">
         </div>
        </div> 
       `,s.innerHTML=`
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
        `,e.appendChild(t),e.appendChild(s);let o=e.querySelector(".piedra"),n=e.querySelector(".papel"),i=e.querySelector(".tijera"),r=e.querySelector(".piedra-cont"),d=e.querySelector(".papel-cont"),m=e.querySelector(".tijera-cont");o?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("piedra-clicked",{bubbles:!0,composed:!0}))}),n?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("papel-clicked",{bubbles:!0,composed:!0}))}),i?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tijera-clicked",{bubbles:!0,composed:!0}))}),this.addEventListener("piedra-clicked",()=>{r.style.transform="translateY(-30px)",d.style.opacity="0.5",m.style.opacity="0.5"}),this.addEventListener("papel-clicked",()=>{d.style.transform="translateY(-30px)",r.style.opacity="0.5",m.style.opacity="0.5"}),this.addEventListener("tijera-clicked",()=>{m.style.transform="translateY(-30px)",d.style.opacity="0.5",r.style.opacity="0.5"})}}),customElements.define("custom-versus",class extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),s=document.createElement("div"),o=document.createElement("style"),n=e.getState().game.myPlay,i=e.getState().game.computerPlay,r="";r="papel"==n?a:"piedra"==n?c:l;let d="";d="papel"==i?a:"piedra"==i?c:l,s.innerHTML=`
        <div class="versus-cont">
         <div class="img-cont">
          <img src="${d}" class="img-computer" alt="">
         </div>
         <div class="img-cont">
          <img src="${r}" class="img-player" alt="">
         </div>
        </div>
        `,o.innerHTML=`
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
        `,t.appendChild(s),t.appendChild(o)}});var p=document.querySelector(".root");function h(e){let t=u()?m+e:e;history.pushState({},"",t),g(t)}function g(e){console.log(" el handleRoute recibio una ruta",e);let t=e;for(let s of(u()&&(e.startsWith(m)?(t=e.slice(m.length)).startsWith("/")||(t="/"+t):t="/"),console.log("newRoute ajustada:",t),d))if(console.log("Verificando ruta:",s.path,"con",t),s.path.test(t)){let e=s.component({goTo:h});p.firstChild&&p.firstChild.remove(),p.appendChild(e);return}console.log("Ruta no encontrada, redirigiendo a /welcome"),h("/welcome")}"/"==location.pathname?h("/welcome"):g(location.pathname),window.onpopstate=function(){g(location.pathname)};
//# sourceMappingURL=desafio-PPT.cc56cfc5.js.map
