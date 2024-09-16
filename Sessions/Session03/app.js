// Operators
// ------------------------------------------
// +, -, *, /, %
console.log(25/4)       // 6.25
console.log(25%4)       // 1



// Math
// ------------------------------------------

x = Math.PI
console.log(x);


x = Math.E
console.log(x);


x = Math.round(6.9)
console.log(x);             // 7

x = Math.round(6.1)
console.log(x);             // 6

x = Math.round(6.5)
console.log(x);             // 7

x = Math.ceil(6.2)
console.log(x);             // 6

x = Math.floor(6.9)
console.log(x);             // 6

x = Math.sqrt(25)
console.log(x);             // 5 
x = Math.abs(-5)
console.log(x);             // 5

x = Math.pow(4, 2)
console.log(x);             // 5

x = Math.min(1, 3, -2, 18, 32, 8)
console.log(x);             // -2


x = Math.max(1, 3, -2, 18, 32, 8)
console.log(x);             // 32


x = Math.random()
console.log(x);             // [0, 1] ~= 0.8155583984526216



x = Math.abs(Math.floor((Math.random() * 10)))
console.log(x);             // [0, 10] ~= 0.8155583984526216








// strings methods and functions
// ------------------------------------------

let name = "Ali"
let familly = "Akbary"
let age = 25

console.log(name + familly);
console.log(name + ' ' + familly);


name = "Ali "
familly = "Akbary"
fullName = name + familly
console.log(fullName);


txt = 'My name is ' + fullName + ', I am ' + age + ' years old'
console.log(txt);

txt = `My name is ${fullName}, I am ${age} years old`
console.log(txt);


// length
name = "Ali"
familly = "Akbary"
console.log(name, name.length, familly, familly.length);
console.log(name.concat(' ', familly, ' from Tehran'));


console.log(name.toLowerCase())     //ali
console.log(name.toUpperCase())     //ALI


console.log(name[2])               // i
console.log(name.indexOf('i'))     // 2
console.log(name.charAt(1))        // l
console.log(name.charAt('1'))      // l

console.log(name.substring(0, 2))      // Al
console.log(name.slice(0, 2))          // Al


txt = 'Hello, my name is Ali, I am 34 years old'
parts = txt.split(' ')
console.log(parts)          //  ['Hello,', 'my', 'name', 'is', 'Ali,', 'I', 'am', '34', 'years', 'old']


let languages = 'php, css, python, js, c++, html'
x = languages.split(', ')
console.log(x)             //  ['php', 'css', 'python', 'js', 'c++', 'html']
console.log(x[2])             //  'python'


txt = 'my name is sali'
console.log(txt);
newTxt = txt.replace('sali', 'ali')
console.log(newTxt);



console.log(txt.includes('my'));
console.log(txt.includes('my!'));




// Arrays
// -----------------------------
const num1 = [1, 2, 3, 4]
const num2 = new Array(1, 2, 3, 4)
const num3 = ["Reza", "Ali", "Saeed"]
const num4 = ["Ali", 34, true, {name: "Hassan", familly: "Akbari"}, [1, 2, 3, 4]]

console.log(num4);
console.log(num4.length); //get length
console.log(Array.isArray(num4)); // check if is array
console.log(Array.isArray(txt)); // false it is string
console.log(num4[3]); // ge the fourth item

num4[1] = 100
console.log(num4); // ge the fourth item
console.log(num4.indexOf(true)); // ge the index of an item


// Muting Array: do changes on the array
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

num.push(20)
console.log(num);       // add an item to the end

num.unshift(10)
console.log(num);       // add an item to the start

num.pop()
console.log(num);       // remove from the end

num.shift()
console.log(num);       // remove from the begining

console.log(num.splice(2, 5));  // remove from to end (change the array too)
console.log(num.reverse());     // reverse the origin array
console.log(num);


console.log(num.concat(num3));    // create a new array from two
console.log(num);

console.log(num.concat(num3).sort());    // sort from A-z, 0-9
console.log(num.sort());    // change self array
console.log(num);           // chnaged array



// CallBack Function
num = [1, 2, 23, 11, 3, 5, 4, 51, 62, 33, 21, 18]
console.log(num.sort()); // sort by the firts number so 12 is smaller than 5

// use callback Function to handle sorting
val = num.sort(function(x, y){return x - y})
console.log(val);






// functions
function sayBirthFromAge(age){
    return 1403 - age
}


console.log(sayBirthFromAge(35));
