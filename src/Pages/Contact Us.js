const createOperatingHours = () => {
  const operatingHours = document.createElement("div");
  operatingHours.className = "operating-hours";

  const heading = document.createElement("h3");
  heading.innerText = "Operating Hours";

  const weekdays = document.createElement("p");
  weekdays.innerText = "Weekdays: 9AM ~ 10PM";
  const weekends = document.createElement("p");
  weekends.innerText = `Weekends: 9AM ~ 12MN`;

  operatingHours.appendChild(heading);
  operatingHours.appendChild(weekdays);
  operatingHours.appendChild(weekends);

  return operatingHours;
};

const reservation = () => {
  const container = document.createElement("div");
  container.className = "reservation-container";

  const heading = document.createElement("h3");
  heading.innerText = `Book a Reservation`;
  container.appendChild(heading);

  const formContainer = document.createElement("form");
  formContainer.className = "form-container";

  const inputType = (label, id, type, placeholder) => {
    const inputDiv = document.createElement("div");
    inputDiv.innerHTML = `
      <label for=${id}>${label}</label>
      <input type=${type} id=${id} name=${id} placeholder='${placeholder}'>`;
    return inputDiv;
  };

  formContainer.appendChild(
    inputType(`Full Name`, `fullname`, `text`, `John/Jane Doe`)
  );
  formContainer.appendChild(
    inputType(`Contact Number`, `contactnumber`, `tel`, `0965 *** ****`)
  );
  formContainer.appendChild(
    inputType(`Email Address`, `email`, `email`, `amber@steakhouse.com`)
  );
  formContainer.appendChild(
    inputType(`Date and Time`, `datetime`, `datetime-local`)
  );
  const submitBtn = document.createElement("button");
  submitBtn.innerText = "Book Now";
  submitBtn.setAttribute("type", "submit");
  formContainer.appendChild(submitBtn);

  container.appendChild(formContainer);

  return container;
};

const location = () => {
  const locationDiv = document.createElement("div");
  locationDiv.className = "location";

  const heading = document.createElement("h3");
  heading.innerText = `Location`;
  locationDiv.appendChild(heading);

  const address = document.createElement("p");
  address.innerText = "314 Sta Teresita Street, Sampaloc, Manila";
  locationDiv.appendChild(address);

  const mapContainer = document.createElement("div");
  mapContainer.className = "map-container";
  mapContainer.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.933831093502!2d120.99510607527141!3d14.602845177021312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9fb5e26e2c1%3A0xd667c59cce297ae4!2s314%20Sta.Teresita%2C%20Sampaloc%2C%20Manila%2C%201015%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700453204367!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  locationDiv.appendChild(mapContainer);

  return locationDiv;
};

export default function createContactUsPage() {
  const contactUsPage = document.createElement("div");
  contactUsPage.className = "contact-us";

  contactUsPage.appendChild(createOperatingHours());
  contactUsPage.appendChild(location());
  contactUsPage.appendChild(reservation());

  return contactUsPage;
}
