// Practice exercise 6 - apply common function patterns
function commonFunctionPattern() {
    // password checker
    function isStrongPassword(password) {
        if (password.length < 8) {
            return false;
        }

        let hasNum = false;
        for (let i = 0; i < password.length; i++) {
            if (password[i] >= '0' && password[i] <= '9') {
                hasNum = true;
            }
        }

        if (hasNum === false) {
            return false;
        }

        let specials = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        let hasSpec = false;
        for (let i = 0; i < password.length; i++) {
            for (let j = 0; j < specials.length; j++) {
                if (password[i] === specials[j]) {
                    hasSpec = true;
                }
            }
        }

        return hasSpec ? true : false;
    }

    // format percentage
    function formatPercentage(value) {
        let result = value.toFixed(1) + "%";
        return result;
    }

    // compound interest calculator
    function calculateCompoundInterest(principal, rate, years) {
        let total = principal * Math.pow(1 + rate, years);
        return total;
    }

    // check if student can graduate
    function canGraduate(credits, gpa) {
        if (credits >= 120 && gpa >= 2.0) {
            return true;
        } else {
            return false;
        }
    }

    // reverse the words in a sentence
    function reverseWords(sentence) {
        let wordArray = sentence.split(" ");
        let newArray = [];

        for (let i = wordArray.length - 1; i >= 0; i--) {
            newArray.push(wordArray[i]);
        }

        let finalSentence = newArray.join(" ");
        return finalSentence;
    }

    // challenge
    function reverseWordsCapitalized(sentence) {
        let wordArray = sentence.split(" ");
        let newArray = [];

        for (let i = wordArray.length - 1; i >= 0; i--) {
            newArray.push(wordArray[i]);
        }

        let capArray = [];
        for (let i = 0; i < newArray.length; i++) {
            let w = newArray[i];
            let first = w[0].toUpperCase();
            let rest = w.slice(1).toLowerCase();
            let newWord = first + rest;
            capArray.push(newWord);
        }

        let final = capArray.join(" ");
        return final;
    }


    console.log(isStrongPassword("abc123"));
    console.log(isStrongPassword("password123!"));
    console.log(formatPercentage(85.678));
    console.log(calculateCompoundInterest(1000, 0.05, 5));
    console.log(canGraduate(120, 2.5));
    console.log(reverseWords("Hello this is Mariam"));
    console.log(reverseWordsCapitalized("hello this is mariam"));
}
//  Practice Exercise 7- Smart Shopping Calculator
function smartShoppingCalculator() {
    // product calculator
    function calculateProductTotal(price, quantity, discountPercent) {
        if (price < 0 || quantity < 0 || discountPercent < 0 || discountPercent > 100) {
            return "Invalid input! Check your values.";
        }

        let subtotal = price * quantity;
        let discountAmount = subtotal * (discountPercent / 100);
        let total = subtotal - discountAmount;

        return total;
    }

    // tax calculator
    function calculateTax(amount, location) {
        if (amount < 0) {
            return "Invalid amount!";
        }

        let taxRate;

        if (location === "Lagos") {
            taxRate = 0.075;
        } else if (location === "Abuja") {
            taxRate = 0.075;
        } else if (location === "Rivers") {
            taxRate = 0.08;
        } else if (location === "Kano") {
            taxRate = 0.07;
        } else {
            taxRate = 0.075;
        }

        let taxAmount = amount * taxRate;
        return taxAmount;
    }

    // shipping calculator
    function calculateShipping(weight, distance) {
        if (weight <= 0 || distance <= 0) {
            return "Invalid weight or distance!";
        }

        let baseRate = 500;
        let shippingCost;

        if (weight <= 1) {
            shippingCost = baseRate;
        } else if (weight <= 5) {
            shippingCost = baseRate + (weight * 200);
        } else if (weight <= 10) {
            shippingCost = baseRate + (weight * 300);
        } else {
            shippingCost = baseRate + (weight * 400);
        }

        if (distance > 100) {
            shippingCost = shippingCost + (distance * 5);
        } else if (distance > 50) {
            shippingCost = shippingCost + (distance * 3);
        }

        return shippingCost;
    }

    // membership discount
    function applyMembershipDiscount(total, membershipType) {
        if (total < 0) {
            return "Invalid total amount!";
        }

        let discount = 0;
        let freeShipping = false;

        let isMember = membershipType !== "none" ? true : false;

        if (membershipType === "gold") {
            discount = total * 0.15;
            freeShipping = true;
        } else if (membershipType === "silver") {
            discount = total * 0.10;
            freeShipping = total > 5000 ? true : false;
        } else if (membershipType === "bronze") {
            discount = total * 0.05;
            freeShipping = false;
        } else {
            discount = 0;
            freeShipping = false;
        }

        return {
            discount: discount,
            freeShipping: freeShipping
        };
    }

    // receipt generator
    function generateReceipt(price, quantity, productDiscount, location, weight, distance, membershipType) {
        let productTotal = calculateProductTotal(price, quantity, productDiscount);

        if (typeof productTotal === "string") {
            return productTotal;
        }

        let membershipInfo = applyMembershipDiscount(productTotal, membershipType);
        let afterMemberDiscount = productTotal - membershipInfo.discount;

        let taxAmount = calculateTax(afterMemberDiscount, location);

        let shippingCost = calculateShipping(weight, distance);

        if (membershipInfo.freeShipping === true) {
            shippingCost = 0;
        }

        let finalTotal = afterMemberDiscount + taxAmount + shippingCost;

        console.log("========== RECEIPT ==========");
        let receipt = "";
        receipt += "Product Total: ₦" + (price * quantity).toFixed(2) + "\n";
        receipt += "Product Discount: -₦" + (price * quantity * productDiscount / 100).toFixed(2) + "\n";
        receipt += "After Discount: ₦" + productTotal.toFixed(2) + "\n";
        receipt += "Membership (" + membershipType + "): -₦" + membershipInfo.discount.toFixed(2) + "\n";
        receipt += "Subtotal: ₦" + afterMemberDiscount.toFixed(2) + "\n";
        receipt += "Tax (" + location + "): ₦" + taxAmount.toFixed(2) + "\n";


        if (membershipInfo.freeShipping) {
            receipt += "Shipping: FREE (Member Benefit)\n";
        } else {
            receipt += "Shipping: ₦" + shippingCost.toFixed(2) + "\n";
        }
        console.log("");
        receipt += "FINAL TOTAL: ₦" + finalTotal.toFixed(2) + "\n";
        ;

        return receipt;
    }


    console.log(generateReceipt(2000, 3, 10, "Lagos", 2, 30, "none"));
    console.log(generateReceipt(5000, 2, 5, "Abuja", 8, 150, "gold"));
    console.log(generateReceipt(3000, 1, 0, "Rivers", 1.5, 60, "silver"));
}