import "./styles/main.css";
import createHeader from "./header";
import createFooter from "./footer";
import createHomePage from "./Pages/home";
import createMenuPage from "./Pages/menu";
import createAboutUsPage from "./Pages/about";
import createContactUsPage from "./Pages/Contact Us";

const togglePages = () => {
  const main = document.querySelector("#main");

  const navBtn = document.querySelectorAll(".nav-btn");
  navBtn.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e);
      if (e.innerText == "Home") {
        main.replaceChild(createHomePage(), main.firstChild);
      } else if (e.innerText == "Menu") {
        main.replaceChild(createMenuPage(), main.firstChild);
      } else if (e.innerText == "About Us") {
        main.replaceChild(createAboutUsPage(), main.firstChild);
      } else if (e.innerText == "Contact Us") {
        main.replaceChild(createContactUsPage(), main.firstChild);
      }
    });
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
