let menuItems = [
    { id: 1, name: "Coffe", price: 3.50},
    { id: 2, name: "sandwich", price: 8.00}
];

menuItems.push({ id:3, name: "Tea", Price: 2.50 })   
console.log("Menu items:", menuItems);


localStorage.setItem('userName', 'Alice');
localStorage.setItem('userAge', 25);
localStorage.setItem('isLoggedIn', 'true');


let name = localStorage.getItem('userName');
let age = localStorage.getItem('userAge');
let isLoggedIn = localStorage.getItem('isLoggedIn');

console.log("Retrived data:");
console.log("Name:", name);
console.log("Logged in:", isLoggedIn);


if (localStorage.getItem('userName') !== null) {
    console.log("User name is saved");
}  else {
    console.log("No user name saved");
}

localStorage.removeItem('userAge');

// localStorage.clear();

let price = 15.99;
localStorage.setItem('productPrice', price.toString());

let savedPrice = localStorage.getItem('productPrice');
if (savedPrice !== null) {
    savedPrice = Number(savedPrice);
    console.log("Price:", savedPrice, typeof savedPrice)
}
console.log("");


function saveNumber(key, value) {
    localStorage.setItem(key, value.toString());
}

function loadNumber(key, defaultValue = 0) {
    let saved = localStorage.getItem(key);
    return saved !== null ? Number(saved) : defaultValue;
}

function saveBoolean(key, value) {
    let saved = localStorage.getItem(key);
    return saved !== null ? saved === 'true' : defaultValue;
}



// let age = 20;
// let status = (age >= 18) ? "Adult" : "Minor";

// console.log(status);


