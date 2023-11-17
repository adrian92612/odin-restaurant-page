import "./styles/main.css";
import createHeader from "./header";
import createFooter from "./footer";
import createHomePage from "./Pages/home";
import createMenuPage from "./Pages/menu";

const goToMenu = () => {
  const main = document.getElementById("main");
  main.replaceChild(createMenuPage(), main.firstChild);
};

const setClicks = () => {
  const btn = document.querySelector(".menu-btn");
  btn.addEventListener("click", goToMenu);
};

(function init() {
  const root = document.getElementById("root");
  const mainSection = document.createElement("div");
  mainSection.setAttribute("id", "main");
  mainSection.appendChild(createHomePage());

  root.appendChild(createHeader());
  root.appendChild(mainSection);
  root.appendChild(createFooter());
  setClicks();
})();
