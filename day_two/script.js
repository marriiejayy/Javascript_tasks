 // Task1: Simple Grading System
 
function getGrade(score) {

    if (score >= 90) {
        console.log(`Score: ${score} -Grade A`)
    } else if (score >=80) {
        console.log(`Score: ${score} - Grade B`)
    } else if (score >=70) {
        console.log(`Score: ${score} - Grade C`)
    } else if (score >=60) {
        console.log(`Score: ${score} - Grade D`)
    }  else if (score >=60) {
        console.log(`Score: ${score} - Grade F`)
    }
}


  // Task2: Discount Calculator
function calculateDiscount(price, customerType, isFirstPurchase) {
   let discount = 0; 

   if (customerType ==="student") {
    discount = 0.10; 
    } else if (customerType === "senior") {
        discount = 0.15; 
    } else if (customerType === "employee") {
        discount = 0.20; 
    }

    if (isFirstPurchase) {
        discount += 0.05;
    }
    let finalPrice = price* (1- discount);
    let newFinalPrice = finalPrice.toFixed(2);
    let discountedPercent = discount * 100

    console.log("Price calculation:");
    console.log(`Original: $${finalPrice}`);
    console.log(`Discount: ${discountedPercent}`);
    console.log(`Final price: $${newFinalPrice}`);
}
calculateDiscount(3000, "student", false)

    // Task3: Weather Advisor
function weatherAdvice(temperature, isRaining) {
    if (temperature <= 32 && isRaining === true){
        console.log(`freezing rain! Stay inside!`)
    } else if (temperature < 32){
        console.log(`Very cold, wear a heavy jacket`)
    } else if (temperature >= 32 && temperature <= 60){
        console.log(`Chilly, bring a jacket.`)
    } else if (temperature >= 60 && temperature <=80){
        console.log(`Nice weather!`)
    } else if (temperature > 80) {
        console.log(`It's hot, stay hydrated`)
    }
}

weatherAdvice(40, false) 

    // Task4: ATM simulator
let balance = 5000;
let action = "deposit";
let amount = 2000;


function atm(balance, action, amount) {
    if (action === "withdraw") {
        if (amount > 2500) {
            console.log("You cannot withdraw more than 2500 at once.");
        } else if (balance >= amount) {
            balance = balance - amount;
            console.log(`You've successfully taken out money. Remaining balance: $${balance}`);
        } else {
            console.log("Sorry! You don't have enough money for this transaction.");
        }
    } else if (action === "deposit") {
        if (amount > 0) {
            balance = balance + amount;
            console.log(`Thanks for depositing! Your updated balance is $${balance}`);
        } else {
            console.log("Invalid deposit amount. Try again.");
        }
    }
}






