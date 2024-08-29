//Skins
document.getElementById("first-color").addEventListener("click", () => {
    document.body.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop1-bg-color");

    let box = document.getElementById("box");

    box.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop1-box-color");

    box.style.borderColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop1-border-color");
});

document.getElementById("second-color").addEventListener("click", () => {
    document.body.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop2-bg-color");

    let box = document.getElementById("box");

    box.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop2-box-color");

    box.style.borderColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop2-border-color");
});

document.getElementById("third-color").addEventListener("click", () => {
    document.body.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop3-bg-color");

    let box = document.getElementById("box");

    box.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop3-box-color");

    box.style.borderColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop3-border-color");
});

document.getElementById("fourth-color").addEventListener("click", () => {
    document.body.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop4-bg-color");

    let box = document.getElementById("box");

    box.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop4-box-color");

    box.style.borderColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop5-border-color");
});

document.getElementById("fifth-color").addEventListener("click", () => {
    document.body.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop5-bg-color");

    let box = document.getElementById("box");

    box.style.backgroundColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop5-box-color");

    box.style.borderColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue("--shop5-border-color");
});

//Currency
let count = document.getElementById("count");

document
    .getElementById("currency-incrementor")
    .addEventListener("click", () => {
        let currentCount = parseInt(count.textContent);
        if (isNaN(currentCount)) {
            currentCount = 0;
        }

        currentCount++;
        count.textContent = currentCount;

        localStorage.setItem("count", currentCount);
    });

//Save Player Currency
window.onload = () => {
    let savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
        count.textContent = parseInt(savedCount);
    }
};

//Buy Skins

//Cost of Skins
const costOne = 5;
const costTwo = 10;
const costThree = 15;
const costFour = 20;
const costFive = 25;

//Buy buttons
let firstBuy = document.getElementById("first-buy");
let secondBuy = document.getElementById("second-buy");
let thirdBuy = document.getElementById("third-buy");
let fourthBuy = document.getElementById("fourth-buy");
let fifthBuy = document.getElementById("fifth-buy");

//Skins buttons
let firstColor = document.getElementById("first-color");
let secondColor = document.getElementById("second-color");
let thirdColor = document.getElementById("third-color");
let fourthColor = document.getElementById("fourth-color");
let fifthColor = document.getElementById("fifth-color");

// Add event listener to the button
firstBuy.addEventListener("click", () => {
    //Get the current count from local storage
    let currentCount = parseInt(localStorage.getItem("count"));

    // Check if currentCount is a number and is greater than or equal to the cost
    if (!isNaN(currentCount) && currentCount >= costOne) {
        // Decrement the count by the cost
        currentCount -= costOne;

        // Save the decremented count back to local storage
        localStorage.setItem("count", currentCount);

        // Update the count on the screen
        count.textContent = currentCount;

        // Change the display property of the element to show
        firstColor.style.display = "block";

        // Hide the buy button
        firstBuy.style.display = "none";
    }
});

// Add similar event listeners for the other buy buttons...

secondBuy.addEventListener("click", () => {
    //Get the current count from local storage
    let currentCount = parseInt(localStorage.getItem("count"));

    // Check if currentCount is a number and is greater than or equal to the cost
    if (!isNaN(currentCount) && currentCount >= costTwo) {
        // Decrement the count by the cost
        currentCount -= costTwo;

        // Save the decremented count back to local storage
        localStorage.setItem("count", currentCount);

        // Update the count on the screen
        count.textContent = currentCount;

        // Change the display property of the element to show
        secondColor.style.display = "block";

        // Hide the buy button
        secondBuy.style.display = "none";
    }
});

thirdBuy.addEventListener("click", () => {
    //Get the current count from local storage
    let currentCount = parseInt(localStorage.getItem("count"));

    // Check if currentCount is a number and is greater than or equal to the cost
    if (!isNaN(currentCount) && currentCount >= costThree) {
        // Decrement the count by the cost
        currentCount -= costThree;

        // Save the decremented count back to local storage
        localStorage.setItem("count", currentCount);

        // Update the count on the screen
        count.textContent = currentCount;

        // Change the display property of the element to show
        thirdColor.style.display = "block";

        // Hide the buy button
        thirdBuy.style.display = "none";
    }
});

fourthBuy.addEventListener("click", () => {
    //Get the current count from local storage
    let currentCount = parseInt(localStorage.getItem("count"));

    // Check if currentCount is a number and is greater than or equal to the cost
    if (!isNaN(currentCount) && currentCount >= costFour) {
        // Decrement the count by the cost
        currentCount -= costFour;

        // Save the decremented count back to local storage
        localStorage.setItem("count", currentCount);

        // Update the count on the screen
        count.textContent = currentCount;

        // Change the display property of the element to show
        fourthColor.style.display = "block";

        // Hide the buy button
        fourthBuy.style.display = "none";
    }
});

fifthBuy.addEventListener("click", () => {
    //Get the current count from local storage
    let currentCount = parseInt(localStorage.getItem("count"));

    // Check if currentCount is a number and is greater than or equal to the cost
    if (!isNaN(currentCount) && currentCount >= costFive) {
        // Decrement the count by the cost
        currentCount -= costFive;

        // Save the decremented count back to local storage
        localStorage.setItem("count", currentCount);

        // Update the count on the screen
        count.textContent = currentCount;

        // Change the display property of the element to show
        fifthColor.style.display = "block";

        // Hide the buy button
        fifthBuy.style.display = "none";
    }
});

//deincrement currency