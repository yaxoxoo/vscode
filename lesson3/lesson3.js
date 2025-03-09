let screenPrice = 10000;
let percentage = 10;
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;

const asking = function() {
    titleProject = prompt('Project name');
    screensValue = prompt('Template, unique design, animations');
    responsive = prompt('Is responsiveness needed?');
};

let service = prompt('What additional service is needed?');
let servicePrice = +prompt('How much will it cost?');
let serviceSecond = prompt('What additional service is needed?');
let servicePriceSecond = +prompt('How much will it cost?');

const getAllServicePrices = function() {
    return servicePrice + servicePriceSecond;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getServicePercentPrices = function(price) {
    return price - (price * (percentage / 100));
};

const getTitle = function() {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
};

asking();
allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices(fullPrice);
newTitle = getTitle();

if (fullPrice > 50000) {
    console.log("We will give you a 10% discount.");
} else if (fullPrice >= 20000 && fullPrice < 50000) {
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

console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(service);
console.log(servicePrice);
console.log(serviceSecond);
console.log(servicePriceSecond);
console.log(Math.ceil(servicePercentPrice));