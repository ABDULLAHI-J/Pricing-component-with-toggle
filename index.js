// checkbox
let anually_Monthly_Toggle = document.querySelector("#switch");

// monthly price
let monthly = document.querySelectorAll(".price-monthly");

// yearly price
let yearly = document.querySelectorAll(".price-anually");

// list for monthly
let listForMonthly = document.querySelectorAll("#list-for-monthly");

// list for Anually
let listForAnually = document.querySelectorAll("#list-for-anually");

// function to controll the behaviour of the checked in the state of checked or unchecked
anually_Monthly_Toggle.addEventListener("change", () => {
  if (anually_Monthly_Toggle.checked) {
    // Yearly and list anually
    yearly.forEach((_price) => {
      _price.style.display = "none";
    });

    listForAnually.forEach((anually) => {
      anually.style.display = "none";
    });

    // Monthly and Monthly list
    monthly.forEach((_price) => {
      _price.style.display = "flex";
    });

    listForMonthly.forEach((anually) => {
      anually.style.display = "block";
    });
  } else {
    // Anually
    yearly.forEach((_price) => {
      _price.style.display = "flex";
    });

    listForAnually.forEach((anually) => {
      anually.style.display = "block";
    });

    // Monthly
    monthly.forEach((_price) => {
      _price.style.display = "none";
    });

    listForMonthly.forEach((anually) => {
      anually.style.display = "none";
    });
  }
});
