const screenPrice = 150;
const percentage = 20; 

const titleProject = prompt("What's the project name?");
const screensValue = prompt("What are the screens value?: template, unique design, animations");
const responsive = confirm("Do you need a responsive design?");

const service1 = prompt("What service do you need?");
const servicePrice1 = Number(prompt("How much will it cost?"));

const service2 = prompt("What other service do you need?");
const servicePrice2 = Number(prompt("How much will this second service cost?"));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = fullPrice * percentage / 100;

if (fullPrice > 50000) {
    console.log("We will give you a 10% discount.");
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("We will give you a 5% discount.");
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("No discount is provided.");
} else if (fullPrice === 0) {
    console.log("The price is zero. Please check your input.");
} else {
    console.log("Something went wrong.");
}
