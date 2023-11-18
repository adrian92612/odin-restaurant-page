export default function createAboutUsPage() {
  const aboutUsPage = document.createElement("div");
  aboutUsPage.className = "about-us-page";

  const aboutUsHeading = document.createElement("p");
  aboutUsHeading.className = "about-us-heading";
  aboutUsHeading.innerText = "About Us";

  const wrapper = document.createElement("div");
  wrapper.className = "text-wrapper";
  const para1 = document.createElement("p");
  para1.innerText = `Welcome to Amber’s Steakhouse, where the sizzle meets the steak! We are passionate about delivering the ultimate steak experience to our guests. With the finest cuts of beef, expertly seasoned and grilled to perfection, our steakhouse is a haven for meat lovers.`;
  const para2 = document.createElement("p");
  para2.innerText = `Our commitment to quality extends beyond the meat itself. We take pride in offering a warm and inviting atmosphere, where you can relax and enjoy your meal in style. Whether you prefer your steak rare, medium, or well-done, our skilled chefs are here to craft the perfect steak for your taste.`;
  const para3 = document.createElement("p");
  para3.innerText = `At Amber’s Steakhouse, it's not just about the food; it's about creating unforgettable moments. Join us for a dining experience that celebrates the art of cooking the perfect steak and indulge in a menu that goes beyond the beef, offering a selection of delicious sides and accompaniments. We look forward to serving you and making your visit a memorable one.`;
  wrapper.appendChild(para1);
  wrapper.appendChild(para2);
  wrapper.appendChild(para3);

  aboutUsPage.appendChild(aboutUsHeading);
  aboutUsPage.appendChild(wrapper);

  return aboutUsPage;
}
