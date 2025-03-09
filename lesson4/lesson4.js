let screenPrice;
let percentage = 10;
let allServicePrices;
let newTitle = "";
let titleProject;
let screensValue;
let responsive;

const checkIsNumber = function (value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

const asking = function () {
  titleProject = prompt("Project name");
  screensValue = prompt("Template, unique design, animations");
  responsive = prompt("Is responsiveness needed?");
};

while (true) {
  let input = prompt("Enter screen price:");
  if (checkIsNumber(input) && input.trim() !== "" && input !== null) {
    screenPrice = parseFloat(input);
    break;
  }
  alert("Please enter a valid number!");
}

const getAllServicePrices = function () {
  let total = 0;
  for (let i = 0; i < 2; i++) {
    let service = prompt(`Enter additional service ${i + 1}:`);
    let servicePrice;

    while (true) {
      let priceInput = prompt(`How much does '${service}' cost?`);
      if (
        checkIsNumber(priceInput) &&
        priceInput.trim() !== "" &&
        priceInput !== null
      ) {
        servicePrice = parseFloat(priceInput);
        break;
      }
      alert("Please enter a valid number!");
    }
    total += servicePrice;
  }
  return total;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function (price) {
  return price - price * (percentage / 100);
};

const getTitle = function () {
  return titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
};

asking();
allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices(fullPrice);
newTitle = getTitle();

if (fullPrice > 50000) {
  console.log("10% discount");
} else if (fullPrice >= 20000) {
  console.log("5% discount");
} else if (fullPrice > 0) {
  console.log("No discount");
} else if (fullPrice === 0) {
  console.log("Free");
} else {
  console.log("Error: negative price");
}

console.log(titleProject);
console.log(screensValue);
console.log(responsive);
console.log(screenPrice);
console.log(allServicePrices);
console.log(Math.ceil(servicePercentPrice));
