const createList = (listName, items, price) => {
  const container = document.createElement("div");
  container.classList.add("menu-list");

  const list = document.createElement("h6");
  list.innerText = listName;
  container.appendChild(list);

  const itemList = document.createElement("div");
  items.forEach((item) => {
    const p = document.createElement("p");
    p.innerText = item;
    itemList.appendChild(p);
  });
  container.appendChild(itemList);

  const priceList = document.createElement("div");
  price.forEach((item) => {
    const p = document.createElement("p");
    p.innerText = `$${item}`;
    priceList.appendChild(p);
  });
  container.appendChild(priceList);

  return container;
};

export default function createMenuPage() {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");

  const steaks = [
    "Porterhouse",
    "Tomahawk",
    "Ribeye",
    "Dry Aged Ribye",
    "Wagyu Ribeye",
    "Filet Mignon",
    "T-Bone",
    "Top Sirloin",
    "Flat Iron",
    "Delmonico",
  ];
  const steaksPrice = [
    45, 80.0, 60.0, 90.0, 228.0, 52.0, 35.0, 37.0, 42.0, 120.0,
  ];
  const steakList = createList("Steaks", steaks, steaksPrice);
  menuPage.appendChild(steakList);

  const salads = [
    "Ceasar",
    "Four Season",
    "Cobb",
    "Fattoush",
    "Waldorf",
    "Larb",
    "Tabbouleh",
    "Greek",
    "Chinese Chicken",
    "Mango Kani",
  ];
  const saladsPrice = [15, 20, 15, 20, 25, 32, 23, 19, 35, 15];
  const saladsList = createList("Salads", salads, saladsPrice);
  menuPage.appendChild(saladsList);

  const sides = [
    "White Rice",
    "French Fries",
    "Coleslaw",
    "Garlic Mushrooms",
    "Corn and Carrots",
    "Grilled Zucchini Gratin",
    "Sweet Potato Fries",
    "Onion & Beans",
    "Marbled Potato w/ Balsamic",
    "Mashed Potato",
  ];
  const sidesPrice = [15, 20, 15, 20, 22, 29, 15, 12, 24, 18];
  const sidesList = createList("Sides", sides, sidesPrice);
  menuPage.appendChild(sidesList);

  const dnd = [
    "Wine",
    "Cola",
    "Coffee",
    "Fruit Shake",
    "tea",
    "Ice Cream",
    "Pudding",
    "Cheese Cake",
    "Brownies",
    "Crepe",
  ];
  const dndPrice = [12, 6, 6, 8, 6, 7, 10, 12, 9, 14];
  const dndList = createList("Drinks and Desserts", dnd, dndPrice);
  menuPage.appendChild(dndList);

  return menuPage;
}
