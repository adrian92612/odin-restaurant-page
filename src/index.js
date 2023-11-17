import "./styles/main.css";
import createHeader from "./header";
import createFooter from "./footer";
import createHomePage from "./Pages/home";
import createMenuPage from "./Pages/menu";

const togglePages = () => {
  const main = document.querySelector("#main");

  const homeBtn = document.querySelector(".home-btn");
  homeBtn.addEventListener("click", () => {
    main.replaceChild(createHomePage(), main.firstChild);
  });

  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", () => {
    main.replaceChild(createMenuPage(), main.firstChild);
  });
};

(function init() {
  const root = document.getElementById("root");
  const mainSection = document.createElement("div");
  mainSection.setAttribute("id", "main");
  mainSection.appendChild(createHomePage());

  root.appendChild(createHeader());
  root.appendChild(mainSection);
  root.appendChild(createFooter());
  togglePages();
})();
