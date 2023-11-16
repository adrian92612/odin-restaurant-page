import steakImg from "../assets/steak.jpg";

const createHeroImg = () => {
  const heroImg = document.createElement("img");
  heroImg.classList.add("hero-img");
  heroImg.src = steakImg;

  return heroImg;
};

const createSlogan = () => {
  const sloganDiv = document.createElement("div");
  sloganDiv.classList.add("slogan");

  const heading = document.createElement("h3");
  heading.classList.add("slogan-heading");
  heading.innerText = "Your Steak Sanctuary";

  const textBody = document.createElement("p");
  textBody.classList.add("text-body");
  textBody.innerText = `Experience culinary excellence at Amber's Steakhouse, nestled in the heart of Manila. Our warm, inviting ambiance and skilled chefs craft exceptional prime cuts to perfection, infusing each steak with unforgettable flavor. Whether celebrating a special occasion or savoring time with loved ones, our attentive staff ensures your experience exceeds expectations. With a meticulously curated menu and extensive wine selection, Amber's Steakhouse elevates every bite, creating lasting memories in a welcoming setting.`;

  sloganDiv.appendChild(heading);
  sloganDiv.appendChild(textBody);
  return sloganDiv;
};

export default function createHomePage() {
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");

  homePage.appendChild(createHeroImg());
  homePage.appendChild(createSlogan());
  return homePage;
}
