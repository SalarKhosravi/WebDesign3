// Function Declaration
func()
func(1,1)
function func(x=3, y=4){
    console.log(x + y);
}




// Function Expresion
const func2 = function(x,y){
    return x + y
}
console.log(func2(3,3));




// Arrow function
let func3 = (x, y) => {
    return x + y
}
console.log(func3(1,1));




// Arrow function with single return line code
let func4 = (x,y) => x * y
console.log(func4(2,2));




// Arrow function one line (one params and single line code with one return)
let func5 = x => x * x
console.log(func5(3));



// Arrow function no params no name
let func6 = () => 'Ali'
console.log(func6());




// Immidiate Avokable Function Expresion
(function(){
    console.log('hello')
})();

(function(name){
    console.log('hello' + name);
})('Ali');













// Loop
// -----------------------------------------------
for(let i = 0; i < 4; i++){
    console.log(i);
}

let i = 0
while (i < 4) {
    console.log(i);
    i ++
}


// let i = 0
do{
    console.log(i);
    i ++
} while (i < 5)


    
    
// Loop in Array or Object
// -----------------------------------------------
arr = [1, 2, 3, 'ali', 'hassan']
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// foreach
arr.forEach(el => {
    console.log(el);
});

// MAP
arr.map(function(index){
    console.log(index);
})


// obj
obj = {
    name: 'ali',
    family: 'akbari'
}
for(let x in obj){
    console.log(x);
}