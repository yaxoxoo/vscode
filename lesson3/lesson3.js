const screenPrice = 15000;
const percentage = 20;

const titleProject = prompt("What's the project name?");
console.log("Project Name: " + titleProject);

const screensValue = prompt(
  "What are the screens value?: template, unique design, animations"
);
console.log("Screens: " + screensValue);

const responsive = confirm("Do you need a responsive design?");
console.log(resresponsive);

const service1 = prompt("What service do you need?");
console.log(service1);
const servicePrice1 = Number(prompt("How much will it cost?"));
console.log(servicePrice1);

const service2 = prompt("What other service do you need?");
console.log(service2);
const servicePrice2 = Number(prompt("How much will this second service cost?"));
console.log(servicePrice2);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Total Price: " + fullPrice);

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
