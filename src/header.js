import icon from "./assets/menu-icon.svg";

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
  floatNav.classList.add("float-nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn", "nav-btn");
  homeBtn.innerText = "Home";
  floatNav.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn", "nav-btn");
  menuBtn.innerText = "Menu";
  floatNav.appendChild(menuBtn);

  const aboutUsBtn = document.createElement("button");
  aboutUsBtn.classList.add("about-us-btn", "nav-btn");
  aboutUsBtn.innerText = "About Us";
  floatNav.appendChild(aboutUsBtn);

  const contactUsBtn = document.createElement("button");
  contactUsBtn.classList.add("contact-us-btn", "nav-btn");
  contactUsBtn.innerText = "Contact Us";
  floatNav.appendChild(contactUsBtn);

  return floatNav;
};

const createNav = () => {
  const nav = document.createElement("nav");

  const menuIcon = document.createElement("img");
  menuIcon.classList.add("menu-icon");
  menuIcon.src = icon;

  return menuIcon;
};

export default function createHeader() {
  const header = document.createElement("header");

  header.appendChild(createLogo());
  header.appendChild(createNav());
  header.appendChild(createfloatingNav());
  return header;
}
