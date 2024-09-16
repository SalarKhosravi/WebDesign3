// Objects
const person = {
    firstName: 'Ali',
    lastName: 'Akbari',
    age: 34,
    hobbies: ['games', 'movies', 'music'],
    address: {
        city: 'lahidjan',
        state: 'Gilan'
    },
    getBirthDay: function(){
        return 1403 - this.age;
    }
}

console.log(person);


// get an items in object
console.log(person.firstName);
console.log(person.hobbies[1]);


// access object inside object
console.log(person['address']['city']);
console.log(person.address.city);

// access function
console.log(person.getBirthDay);
console.log(person.getBirthDay());







// conditions statements
/* syntax:

    if (condistion1 and condition2){
        do smoething here
    } else {
        do something else here
    }

*/

let x = 10

if (x == 10){
    console.log('they are equal');
} else {
    console.log('they are not equal');
}

// Operators:
// equal ==
// equal and same type ===
console.log(x === 10);
console.log(x === '10');


/*
JavaScript ES6 Operators:

1. Arithmetic Operators:
   +   : Addition
   -   : Subtraction
   *   : Multiplication
   /   : Division
   %   : Modulus (Remainder)
   **  : Exponentiation (Power)
   ++  : Increment
   --  : Decrement

2. Assignment Operators:
   =   : Assign
   +=  : Add and assign
   -=  : Subtract and assign
   *=  : Multiply and assign
   /=  : Divide and assign
   %=  : Modulus and assign
   **= : Exponentiation and assign

3. Comparison Operators:
   ==  : Equal to
   === : Strict equal to (checks value and type)
   !=  : Not equal to
   !== : Strict not equal to
   >   : Greater than
   <   : Less than
   >=  : Greater than or equal to
   <=  : Less than or equal to

4. Logical Operators:
   &&  : Logical AND
   ||  : Logical OR
   !   : Logical NOT

6. Ternary Operator:
   ? : :   : Conditional (ternary) operator

7. Type Operators:
   typeof  : Returns the type of a variable
   instanceof : Checks if an object is an instance of a constructor

10. Template Literals (ES6):
   `${}` : Template string literals for embedding expressions

12. Nullish Coalescing Operator (ES2020):
   ??   : Returns the right-hand operand when the left-hand operand is `null` or `undefined`

13. Optional Chaining (ES2020):
   ?.   : Safely access deeply nested object properties

*/


console.log(typeof userName === 'undefined');

userName = 'salar.khosravi@gmail,com'

if (typeof userName === 'undefined'){
    console.log('userName is not defined');
} else {
    console.log(`userName is defined equal ${ userName }`);
}








color = 'green';
if (color == 'red'){
    console.log('the color is red');
} else if (color == 'blue'){
    console.log('the color is blue');
} else {
    console.log('I dont know which color it is');
}







// Logical Operators && , || , !
age = 23

if (age <= 7){
    console.log('you are a child');
} else if ( age > 7 && age < 18){
    console.log('you are a teenager');
} else if (age >= 18 && age < 25){
    console.log('you are a younge person');
} else {
    console.log('you are an adult');
}





// Ternary Operator
// -----------------------------------
x = 13

if (x > 0){
    console.log(`${x} is positive`);
} else {
    console.log(`${x} is negative`);
}

console.log(x > 0 ? `${x} is positive` : '${x} is negative');






// Nullish Coalescing Operator 
// -----------------------------
/*
    rightValue ?? LeftValue
    
    if(rightValue != null){
        rightValue
    } else {
        LeftValue
    }

*/

userFirstName = null
// userFirstName = 'Salar'
console.log(`Hello ${ userFirstName ?? 'Dear'}`);







// Optional ?.
// ------------------------------
console.log(person?.address?.city);