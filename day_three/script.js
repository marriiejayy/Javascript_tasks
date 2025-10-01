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
    
// Practice Exercise 3

// Task- Movie Ratings System  
// 1. Create two arrays: `movies` (names) and `ratings` (numbers) 
function movieRatingSystem() {
    let movies = ["Insidious", "Merlin", "Prison Break", "The Nun", "Money Heist"];
    let ratings = [8, 9, 8.4, 7.6, 9];

    console.log("Movies:", movies);
    console.log("Ratings:", ratings);
    console.log("");

    // 2. Write a function `addMovie(movie, rating)` that adds a new entry 
    function addMovie(movie, rating) {
        movies.push(movie);
        ratings.push(rating);
        console.log("Added movie:", movie);
        console.log("Added rating:", rating);
        console.log("New movie list:", movies);
        console.log("New rating list:", ratings);
        console.log("");
    }

    addMovie("Lovely Runner", 9);
    addMovie("Vagabond", 7.9);
    console.log("");


    // 3. Write a function `getAverageRating()` to calculate the average rating 
    function getAverageRating() {
        let total = 0;
        for (let i of ratings) {
            console.log("Adding ratings:", i);
            total += i
        }

        let average = total / ratings.length;
        console.log(`Summary- Total ratings: ${total}; Average ratings: ${average.toFixed(2)}`);
    }

    getAverageRating()

    console.log("");

    // 4. Write a function `getTopMovie()` to find the highest-rated movie 
    function getTopMovie() {
        let highest = ratings[0];
        for (let i = 1; i < ratings.length; i++) {
            if (ratings[i] > highest) {
                highest = ratings[i]
            }
        }
        let index = ratings.indexOf(highest);
        console.log("Highest rated movie:", movies[index], "; Rating:", highest);
    }
    getTopMovie();

    console.log("");

    // 5. Print a summary of all movies with their ratings
    console.log("====Summary of movies with their ratings====");
    for (let i = 0; i < movies.length; i++) {
        console.log(`${movies[i]}: ${ratings[i]}`);
    }
    console.log("");

    // **Challenge:**
    // Sort the movies by rating (highest → lowest) and display the sorted list

    function sortMoviesByRating() {

        let sortedMovie = [];
        for (let i = 0; i < movies.length; i++) {
            sortedMovie.push({
                movie: movies[i],
                rating: ratings[i]
            });
        }

        // Sort by rating (highest to lowest)
        sortedMovie.sort((a, b) => b.rating - a.rating);

        // Display sorted list
        console.log("\n=== Movies Sorted by Rating (Highest → Lowest) ===");
        for (let i = 0; i < sortedMovie.length; i++) {
            console.log(`${i + 1}. ${sortedMovie[i].movie} - Rating: ${sortedMovie[i].rating}`);
        }


    }
    sortMoviesByRating();
}



// Practice Exercise 4

// Comprehensive Practice Exercise: Student Report System
// Add students- store students name and their grades in an array
function studentReportSystem() {
    let studentNames = [];
    let studentGrades = [];

    function addStudent(name, grade) {
        studentNames.push(name);
        studentGrades.push(grade);
        console.log(`Name: ${name} - Grade: ${grade}`);
    }

    addStudent("Adesina Mariam", 89);
    addStudent("Olawale Wasiu", 27);
    addStudent("Adisa Tofumi", 77);
    addStudent("Adekunle Habeeb", 45);
    addStudent("Coker Tofumi", 37);
    addStudent("Omotayo Azeez", 57);
    addStudent("Aliu Tawa", 80);
    addStudent("Adewale Tofarati", 50);


    console.log("\n=== Students list ===");
    for (let i = 0; i < studentNames.length; i++) {
        console.log(`${i + 1}. ${studentNames[i]} - Grade: ${studentGrades[i]}`);
    }
    studentReportSystem();

    // 2.Calculate Average- Compute the average grade for the class
    function calculateAverage() {
        let total = 0;
        for (let i = 0; i < studentGrades.length; i++) {
            console.log("Adding grades:", studentGrades);
            total += studentGrades[i];
        }
        let average = total / studentGrades.length;
        console.log(`Total grades: ${total}; Average grades: ${average.toFixed(2)}`)

    }
    calculateAverage();

    //Practice exercise 4- Comprehensive Practice Exercise: Student Report System
function studentReportSystem() {
    let studentNames = [];
    let studentGrades = [];

    // 1. Add Student - Store student names and their grades
    function addStudent(name, grade) {
        // Validate inputs
        if (grade < 0 || grade > 100) {
            console.log(`Error: Grade for ${name} must be between 0 and 100`);
            return false;
        }
        
        studentNames.push(name);
        studentGrades.push(grade);
        console.log(`Added: ${name} - Grade: ${grade}`);
        console.log("");
        return true;
    }

    // 2. Calculate Average - Compute the average grade for the class
    function calculateAverage() {
        let total = 0;
        for (let i = 0; i < studentGrades.length; i++) {
            total += studentGrades[i];
        }
        let average = total / studentGrades.length;
        return average;
    }

    // 3. Find Top Student - Identify the student with the highest score
    function findTopStudent() {
        let highest = studentGrades[0];
        let topStudentIndex = 0;
        
        for (let i = 1; i < studentGrades.length; i++) {
            if (studentGrades[i] > highest) {
                highest = studentGrades[i];
                topStudentIndex = i;
            }
        }
        
        return {
            name: studentNames[topStudentIndex],
            grade: highest
        };
    }

    // 3. Find Bottom Student - Identify the student with the lowest score
    function findBottomStudent() {
        let lowest = studentGrades[0];
        let bottomStudentIndex = 0;
        
        for (let i = 1; i < studentGrades.length; i++) {
            if (studentGrades[i] < lowest) {
                lowest = studentGrades[i];
                bottomStudentIndex = i;
            }
        }
        
        return {
            name: studentNames[bottomStudentIndex],
            grade: lowest
        };
    }

    // 4. Grade Categorizer - Assign letter grades based on numeric scores
    function getLetterGrade(grade) {
        if (grade >= 90) return 'A';
        if (grade >= 80) return 'B';
        if (grade >= 70) return 'C';
        if (grade >= 60) return 'D';
        return 'F';
    }

    // Challenge: Sort students by grade (highest → lowest)
    function sortStudentsByGrade() {
        // Create paired data
        let studentData = [];
        for (let i = 0; i < studentNames.length; i++) {
            studentData.push({
                name: studentNames[i],
                grade: studentGrades[i],
                letterGrade: getLetterGrade(studentGrades[i])
            });
        }
        
        // Sort by grade (highest to lowest)
        studentData.sort((a, b) => b.grade - a.grade);
        
        return studentData;
    }

    // 5. Report Generator - Print a formatted class report
    function generateReport() {
        console.log("CLASS REPORT CARD");
        console.log("==================================");
        console.log("Student name according to thier grade and rank")
        // Get sorted student data
        let sortedStudents = sortStudentsByGrade();


        // Print each student
        for (let i = 0; i < sortedStudents.length; i++) {
            let rank = (i + 1);
            let name = sortedStudents[i].name;
            let grade = sortedStudents[i].grade;
            let letter = sortedStudents[i].letterGrade;
            
            console.log(`${i+ 1}.${name}|Score:${grade}|Grade:${letter}|Rank:${rank}`);
        }
        
        console.log("-".repeat(70));
        
        // Calculate statistics
        let average = calculateAverage();
        let topStudent = findTopStudent();
        let bottomStudent = findBottomStudent();
        
        // Print statistics
        console.log("CLASS STATISTICS:");
        console.log(`   Class Average: ${average.toFixed(2)} (${getLetterGrade(average)})`);
        console.log(`   Highest Score: ${topStudent.name} - ${topStudent.grade} (${getLetterGrade(topStudent.grade)})`);
        console.log(`   Lowest Score:  ${bottomStudent.name} - ${bottomStudent.grade} (${getLetterGrade(bottomStudent.grade)})`);
        console.log(`   Total Students: ${studentNames.length}`);
        
        console.log("===========================");
    }

    // Adding students
    console.log("=== Adding Students ===\n");
    addStudent("Adesina Mariam", 89);
    addStudent("Olawale Wasiu", 27);
    addStudent("Adisa Tofumi", 77);
    addStudent("Adekunle Habeeb", 45);
    addStudent("Coker Tofumi", 37);
    addStudent("Omotayo Azeez", 57);
    addStudent("Aliu Tawa", 80);
    addStudent("Adewale Tofarati", 50);
    
    generateReport();
}

studentReportSystem();
}



