const createOperationHours = () => {
  const operationHours = document.createElement("div");
  operationHours.className = "operation-hours";

  const heading = document.createElement("h3");
  heading.innerText = "Operation Hours";

  const weekdays = document.createElement("p");
  weekdays.innerText = "Weekdays: 9AM ~ 10PM";
  const weekends = document.createElement("p");
  weekends.innerText = `Weekends: 9AM ~ 12MN`;

  operationHours.appendChild(heading);
  operationHours.appendChild(weekdays);
  operationHours.appendChild(weekends);

  return operationHours;
};

const reservation = () => {
  const container = document.createElement("div");
  container.className = "reservation-container";
};

export default function createContactUsPage() {
  const contactUsPage = document.createElement("div");
  contactUsPage.className = "contact-us";

  contactUsPage.appendChild(createOperationHours());

  return contactUsPage;
}
