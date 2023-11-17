import icon from "./assets/menu-icon.svg";
import closeIcon from "./assets/close-icon.svg";

const createLogo = () => {
  const logo = document.createElement("div");
  logo.classList.add("logo");

  const logoText = document.createElement("p");
  logoText.innerText = `Amber's Steakhouse`;
  logo.appendChild(logoText);
  return logo;
};

const createfloatingNav = () => {
  const floatNav = document.createElement("div");
  floatNav.classList.add("float-nav", "hide");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.innerText = "Home";
  floatNav.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.innerText = "Menu";
  floatNav.appendChild(menuBtn);

  const aboutUsBtn = document.createElement("button");
  aboutUsBtn.classList.add("nav-btn");
  aboutUsBtn.innerText = "About Us";
  floatNav.appendChild(aboutUsBtn);

  const contactUsBtn = document.createElement("button");
  contactUsBtn.classList.add("nav-btn");
  contactUsBtn.innerText = "Contact Us";
  floatNav.appendChild(contactUsBtn);

  return floatNav;
};

const toggleNav = () => {
  const nav = document.querySelector(".float-nav");
  if (nav.classList.contains("hide")) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
  }
};

const createNav = () => {
  const nav = document.createElement("nav");

  const menuIcon = document.createElement("img");
  menuIcon.classList.add("menu-icon");
  menuIcon.src = icon;
  menuIcon.addEventListener("click", toggleNav);

  nav.appendChild(menuIcon);
  nav.appendChild(createfloatingNav());

  return nav;
};

export default function createHeader() {
  const header = document.createElement("header");

  header.appendChild(createLogo());
  header.appendChild(createNav());

  return header;
}
