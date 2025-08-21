import { initButtonComp } from "./components/button";
import { initTextComp } from "./components/text";
import { initScoreComp } from "./components/score";
import { initCounterComp } from "./components/counter";
import { initStarComp } from "./components/star";
import { initChoicesComp } from "./components/choices";
import { initVersusComp } from "./components/versus";
import { initRouter } from "./router";

(function () {
  initButtonComp();
  initTextComp();
  initScoreComp();
  initCounterComp();
  initStarComp();
  initChoicesComp();
  initVersusComp();
  const root = document.querySelector(".root");
  initRouter(root as any);
})();
