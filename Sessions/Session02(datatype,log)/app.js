// variables
// ------------------------------------------
// var, let, const

var name = "Ali"
console.log(name)


name = 'Hassan'
console.log(name)

// var init
var familly
console.log(familly)  //undefined





// nameing rulles
// ------------------------------------------
// 1- no number at the biggining
// 2- no symbol @, #, %, &
// 3- can use _, $

// wrongs: 1x, 2nduser, name&familly
// corrects:
var x1 = 2
var _x = 3



// CamelCase for variables, method, functions (standard in JS)
var userFullName = 'Ali Akbari'




// kebabCase or SnakeCase or UnderscoreCase
var user_fullname_form_database = 'Ali Akbari'




// PascalCase for classess: UserLoginClass
class UserLoginClass {
    sayHello() {
        console.log(`class name is UserLoginClass`);
    }   
}

const obj = new UserLoginClass();
obj.sayHello()



var firstname = "Ali"
var firstName = "Ali"    // CamelCase
var FirstName = "Ali"    // PascalCase
var first_name = "Ali"   // UndescoreCase





// CONST
// ------------------------------------------
const myConst = 1
console.log(myConst);

// myConst = 2              // TypeError: Assignment to constant variable
// console.log(myConst);




// const js object: But can change an object inside while have the same schema
const userInfo = {
    name: 'ali',
    familly: 'akbary'
}
console.log(userInfo);


userInfo.name = 'Reza'
userInfo.familly = 'Asadi'
console.log(userInfo);



// const js array
const myArr = [1, 2, 3, 4]
console.log(myArr);

myArr.push(5, 6, 7)
console.log(myArr);




// DataTypes: Primitive Type &&&& Refrence Type
// ------------------------------------------

// Primitive Type: string, number, boolean, null, undefined, symbol
let x = 'Ali' 
console.log(typeof x);    // string


x = 25 
console.log(typeof x);   // number


x = true
console.log(typeof x);  // boolean

x = null
console.log(typeof x);  // object


var x10
console.log(typeof x10);  // undefined



x = Symbol()
console.log(typeof x);  // undefined





// Refrence Type
// ------------------------------------------
x = [1, 2, 3]
console.log(typeof x);  // object


x = {name: 'ali', familly: 'akbari'}
console.log(typeof x);  // object






// Casting or parse (String with capital S)
// ------------------------------------------
x = 33
console.log(typeof x);  // number

x = String(33)
console.log(typeof x);  // String '33'

x = String(true)
console.log(typeof x);  // String 'true'

x = String(true)
console.log(typeof x);  // String 'true'

x = String(new Date())
console.log(typeof x);  // String 'true'

x = String([1, 2, 3])
console.log(typeof x);  // String '1,2,3' print with camma

x = 5
console.log(typeof x);  // number

y = (5).toString()
console.log(typeof y);  // String

y = (true).toString()
console.log(typeof y);  // String





// Casting or parse (Number)
// ------------------------------------------
x = Number('5')
console.log(typeof x);  // String


x = Number(true)
console.log(x);  // 1
console.log(typeof x);  // Num

x = Number(false)
console.log(x);  // 0
console.log(typeof x);  // Num

x = Number(null)
console.log(x);  // 0
console.log(typeof x);  // Num


x = Number('Ali')
console.log(x);  // 0
console.log(typeof x);  // NaN


x = Number([1, 2, 3])
console.log(x);  // 0
console.log(typeof x);  // Num


x = parseInt('3.34')
console.log(x);  // 0
console.log(typeof x);  // Num


x = parseFloat('3.34')
console.log(x);  // 0
console.log(typeof x);  // Num


x = parseFloat('3.35')
console.log(x.toFixed(1));  //3.4


x = parseFloat('3.34')
console.log(x.toFixed(1));  //3.3

x = parseFloat('3.37')
console.log(x.toFixed(1));  //3.4
