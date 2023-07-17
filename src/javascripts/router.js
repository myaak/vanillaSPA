import { locationChangeEvent } from "./events/event.js";

const routesPath = "/static/views";

const routes = {
  error: `${routesPath}/error.html`,
  "/activity": `${routesPath}/activity.html`,
  "/map": `${routesPath}/map.html`,
  "/timer": `${routesPath}/timer.html`
};
const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.currentTarget.href);
  switchLocation();
};

async function switchLocation() {
  const path = window.location.pathname;

  if (path === "/") {
    document.getElementById("content").innerHTML = "";
    return;
  }

  const route = routes[path] || routes[error];

  document.getElementById("content").innerHTML = await fetch(route).then(
    (data) => data.text()
  );
  document.dispatchEvent(locationChangeEvent);
}

const goBack = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.go(-1);
};

document.getElementById("back-arrow").addEventListener("click", goBack);
document.querySelectorAll(".header-bottom-left-item").forEach((item) => {
  item.addEventListener("click", route);
});

window.onpopstate = switchLocation;
window.route = route;

switchLocation();
