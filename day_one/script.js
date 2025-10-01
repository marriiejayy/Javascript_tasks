function myPersonalInformation() {
    let firstName = "Mariam";
    let lastName = "Adesina";
    let age = 23;
    let schoolName = "Javascript Academy";
    let grade = "A: Excellent";
    let isGraduated = true;

    let fullName = `${firstName} ${lastName}`;
    console.log("Full name:", fullName);
    console.log("Full name length:", fullName.length);

    let output = `
    <strong>STUDENT PROFILE CARD</STRONG><br></br>

    First name: ${firstName}<br>
    Last name: ${lastName}<br>
    Full name: ${fullName}<br>
    Age: ${age}<br>
    school Name: ${schoolName}<br> 
    Grade: ${grade}<br>
    Graduated: ${isGraduated}<br>
    `;

    console.log("Name in uppercase:", fullName.toUpperCase());
    console.log("School name in lowercase:", schoolName.toLowerCase());
    console.log("Grade trimmed:", grade.trim());

    let nextYearAge = age + 1;
    console.log("Next year age:", nextYearAge);

document.getElementById('arithmetic-operations').innerHTML = output;
}

function createPersonalInformation() {
    const firstName = prompt("Enter your firstname") || "student";
    const lastName = prompt("Enter your last name") || "learner";
    const age = parseInt(prompt("Enter your age")) || 20;
    const schoolName = prompt("Enter your school name") || "schoolName"
    const grade = prompt("Enter your grade") || "A";
    const isGraduated = confirm("Have you graduated?");

    const futureAge = age + 5;

    const personalInfo = `
        <div>
            <h4 style="color: black; background-color: azure;">Your personal information card</h4><br></br>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p><br>
            <p><strong>Age:</strong> i am ${age} years old</p><br>
            <p><strong>School Name:</strong> ${schoolName}</p><br>
            <p><strong>Grade:</strong> ${grade}</p><br>
            <p><strong>Graduated:</strong> ${isGraduated ? 'yes i have graduated' : 'no i havent graduated'}</p><br>
            <p><strong>Future age:</strong> ${futureAge}</p><br>
        </div>
    `;

    document.getElementById('arithmetic-operations').innerHTML = personalInfo;
}


function showArithmeticOperations() {
    let a = 8;
    let b = 3;

    console.log("Addition: a + b =", (a + b));
    console.log("Subtraction: a - b= ", (a - b));
    console.log("Multiplication: a * b", (a * b));
    console.log(" Division: a / b =", (a / b));
    console.log("Modulus: a % b =", (a % b));
    console.log("Exponentiation: a ** b =", (a ** b));

    output = `
        <strong>BASIC ARITHMETIC OPERATIONS</strong><br></br>
        A = ${a} ; B = ${b}<br></br>
        Addition: a + b = ${a + b}<br>
        Subtraction: a - b = ${a - b}<br>
        Multiplication: a * b = ${a * b}<br>
        Division: a / b = ${a / b}<br>
        Modulus: a % b = ${a % b}<br>
        Exponentiation: a ** b = ${a ** b}
    `;

    let average = (a + b) / 2;
    console.log("Average:", average);
    let isAGreater = a > b ;
    console.log("Is number 1 greater:", isAGreater);
    console.log("Between 8 and 3, the larger number is 8")


    document.getElementById('arithmetic-operations').innerHTML = output;
}