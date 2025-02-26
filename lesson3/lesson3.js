const screenPrice = 15000;
const percentage = 20;

const titleProject = prompt("What's the project name?");
console.log("Project Name: " + titleProject);

const screensValue = prompt(
  "What are the screens value?: template, unique design, animations"
);
console.log("Screens: " + screensValue);

const responsive = confirm("Do you need a responsive design?");
console.log("Responsive: " + responsive);

const service1 = prompt("What service do you need?");
console.log("Service 1: " + service1);
const servicePrice1 = Number(prompt("How much will it cost?"));
console.log("Service 1 Price: " + servicePrice1);

const service2 = prompt("What other service do you need?");
console.log("Service 2: " + service2);
const servicePrice2 = Number(prompt("How much will this second service cost?"));
console.log("Service 2 Price: " + servicePrice2);

const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
console.log("Total service prices: " + allServicePrices);

function getFullPrice(allServicePrices, screenPrice) {
  return allServicePrices + screenPrice;
}
const fullPrice = getFullPrice(allServicePrices, screenPrice);
console.log("Total price: " + fullPrice);

const servicePercentPrice = Math.round(
  fullPrice - (fullPrice * percentage) / 100
);
console.log(`Total after ${percentage}% commission: $${servicePercentPrice}`);

if (fullPrice > 50000) {
  console.log("We will give you a 10% discount.");
} else if (fullPrice >= 20000 && fullPrice <= 50000) {
  console.log("We will give you a 5% discount.");
} else if (fullPrice > 0 && fullPrice < 20000) {
  console.log("No discount available.");
} else if (fullPrice === 50000) {
  console.log("Special offer coming soon.");
} else if (fullPrice === 20000) {
  console.log("No additional discount.");
} else if (fullPrice === 0) {
  console.log("The total price is zero.");
} else {
  console.log("Something went wrong.");
}

const getTitle = function (titleProject) {
  return (
    titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase()
  );
};
const formattedTitle = getTitle(titleProject);
console.log("Formatted project title: " + formattedTitle);

const getServicePercentPrices = function (fullPrice, percentage) {
  const servicePercentPrice = Math.round(
    fullPrice - (fullPrice * percentage) / 100
  );
  console.log(`Total after ${percentage}% commission: $${servicePercentPrice}`);
  return servicePercentPrice;
};
const servicePercentPriceFunc = getServicePercentPrices(fullPrice, percentage);

const getRollbackMessage = function (fullPrice) {
  let discountMessage = "No discount available.";

  if (fullPrice > 50000) {
    discountMessage = "We will give you a 10% discount.";
  } else if (fullPrice >= 20000 && fullPrice <= 50000) {
    discountMessage = "We will give you a 5% discount.";
  } else if (fullPrice === 50000) {
    discountMessage = "Special offer coming soon.";
  } else if (fullPrice === 20000) {
    discountMessage = "No additional discount.";
  } else if (fullPrice === 0) {
    discountMessage = "The total price is zero.";
  } else if (fullPrice < 0) {
    discountMessage = "Something went wrong.";
  }

  console.log(discountMessage);
};

getRollbackMessage(fullPrice);
