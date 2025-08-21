import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGamePage } from "./pages/game";
import { initVersusPage } from "./pages/versus";
import { initResultPage } from "./pages/result";
const routes = [
  {
    path: /\/welcome/,
    component: initWelcomePage,
  },
  {
    path: /\/instructions/,
    component: initInstructionsPage,
  },
  {
    path: /\/game/,
    component: initGamePage,
  },
  {
    path: /\/versus/,
    component: initVersusPage,
  },
  {
    path: /\/result/,
    component: initResultPage,
  },
];

const BASE_PATH = "/D-piedra-papel-tijera";
function isGitHubPages() {
  return location.host.includes("github.io");
}
export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGitHubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    console.log(" el handleRoute recibio una ruta", route);
    let newRoute = route;
    if (isGitHubPages()) {
      if (route.startsWith(BASE_PATH)) {
        newRoute = route.slice(BASE_PATH.length);
        if (!newRoute.startsWith("/")) {
          newRoute = "/" + newRoute;
        }
      } else {
        newRoute = "/";
      }
    }

    console.log("newRoute ajustada:", newRoute);

    for (const r of routes) {
      console.log("Verificando ruta:", r.path, "con", newRoute);
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
        return;
      }
    }
    console.log("Ruta no encontrada, redirigiendo a /welcome");
    goTo("/welcome");
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
