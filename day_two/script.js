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

atm(5000, "deposit", 2000);

// Practice Exercise 5- Personal Assistant Function

// Personal Assistant Function

function personalAssistant(time, weather, dayType) {
  // validation
  if (time < 0 || time > 24) {
    return "The time is invalid! Use 0-24 hour format.";
  }
  
  if (weather !== 'sunny' && weather !== 'rainy' && weather !== 'cloudy') {
    return "Invalid weather! Make use of sunny, rainy, or cloudy.";
  }
  
  if (dayType !== 'workday' && dayType !== 'weekend' && dayType !== 'holiday') {
    return "Invalid day type! Use workday, weekend, or holiday.";
  }
  
   // Checking if it's a work day 
  let isWorkday = dayType === 'workday' ? true : false;
  
  // Checking if it's free time (weekend or holiday)
  let isFreeDay = dayType === 'weekend' || dayType === 'holiday' ? true : false;
  
  // Morning (6-12)
  if (time >= 6 && time < 12) {
    if (isWorkday && weather === 'rainy') {
      return "Good morning! It's rainy, take an umbrella to work.";
    } else if (isWorkday && weather === 'sunny') {
      return "Good morning! The weather is a nice day for work. Would you perhaps like to take a walk?";
    } else if (isFreeDay && weather === 'sunny') {
      return "Good morning! It's a sunny day. Go outside and enjoy the weather!";
    } else {
      return "Good morning! Do have a great day!";
    }
  }
  
  // Afternoon (12-17)
  if (time >= 12 && time < 17) {
    if (isWorkday) {
      return "Good afternoon! Don't forget to take a lunch break.";
    } else if (isFreeDay && weather === 'sunny') {
      return "Good afternoon! This is a perfect time for outdoor activities!";
    } else {
      return "Good afternoon! Enjoy your free time.";
    }
  }
  
  // Evening (17-21)
  if (time >= 17 && time < 21) {
    if (isWorkday) {
      return "Good evening! It's a good time to relax after work.";
    } else if (isFreeDay) {
      return "Good evening! Great time for dinner or hanging out!";
    }
  }
  
  // Night (21-24 or 0-6)
  if (time >= 21 || time < 6) {
    let message = isWorkday ? "Get some rest for tomorrow!" : "Enjoy your night!";
    return "It's late! " + message;
  }
}

console.log(personalAssistant(14, "sunny", "weekend"));


  