// Practice exercise one

// array shopping list
function shoppingList() {
    let shoppingList = ["Bag", "Toothpaste", "Powder", "Lipstick", "Shoe"];
    console.log("Shopping list:", shoppingList);

    // add new item to the end of the list
    let addItem = shoppingList.push("Pillow");
    console.log("Added items:", addItem);
    console.log("New shopping list:", shoppingList);

    console.log("")

    //remove first item 
    let removeItem = shoppingList.shift();
    console.log("Removed item:", removeItem);
    console.log("New shopping list", shoppingList);

    console.log("");

    //display the total number of items
    console.log("Total number of shopping items:", shoppingList.length);
    console.log("");

    //loop through the list and print each items with its positions
    console.log("=====Shopping list items=====");

    function formatList(newList) {
        for (let i = 0; i < shoppingList.length; i++) {
            console.log(`${i + 1}. ${shoppingList[i]}`);
        }
    }
    formatList()

}



// Practice exercise two
// store grades in an array

// function studentsGradesAnalyzer() {
    let grades = [25, 65, 80, 57, 63, 91, 43, 51, 39, 67];
    console.log("Student grades", grades);
    console.log("");

    //write a function getAverage(grades)
    console.log("Calculating average");
    function getAverage(grades) {
        let total = 0;
        for (let grade of grades) {
            console.log("ADDING GRADES: ", grade);
            total += grade;
        }

        let averageGrades = total / grades.length;
        console.log(`Summary:Total grades = ${total}; Average grades = ${averageGrades}`);
    }

    // getAverage(grades);

// }


    // 3. Write a function `getHighest(grades)` to find the highest grade


    // 4. Write a function `getLowest(grades)` to find the lowest grade
    // 5. Use loops where necessary to process the array



    // **Challenge:**
    // Create a function `getPassRate(grades)` that:
    // - Counts how many students scored **50 or above** (passing)

    // - Divides that number by the total number of students
    // - Returns the **percentage of students who passed**
