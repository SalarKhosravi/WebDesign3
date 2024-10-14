// Destructuring
///////////////////////////////////////////////
let a, b;
[a, b] = [100, 200];
// console.log(a, b);





// rest patern
let c, d;
[c, d, ...rest] = [100, 200, 300, 400, 500];
// console.log(a);
// console.log(b);
// console.log(rest);



({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
// console.log(a, b);

({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});
// console.log(rest);   



// array destructuring
let arr = ['ali', 'akbari', 32];
// const [name, family, age] = arr;
// console.log(name, family, age);






// object destructuring
let person = {
    name: 'Ali',
    family: 'Akbari',
    age: 21,
}

// old way ES 5
// let name = person.name;
// let family = person.family;
// let age = person.age;
// console.log(name, family, age);


// new way ES 6
// const {name, family, age} = person;
// console.log(name, family, age);
















