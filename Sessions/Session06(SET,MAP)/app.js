// Global Scope 
var a = 1
let b = 2
const c = 3 

function test(){
    var a = 4
    let b = 5
    const c = 6 
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// test()
// console.log(a);
// console.log(b);
// console.log(c);

// if(true){
//     var a = 4
//     let b = 5
//     const c = 6 
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a); // 4 -> it change in global scope
// console.log(b); // 2
// console.log(c); // 3


// for(var a = 0; a < 8; a++){
//     console.log(a);
// }

// console.log(a); // 3 -> it change in global scope


// for(let b = 0; b < 8; b++){
//     console.log(b);
// }

// console.log(b); // 2 -> it does not change





// MAP and SET
///////////////////////////////////////////////
// MAP is like dict in python
let map = new Map()
map.set('name', 'ali')
map.set('family', 'akbari')
map.set('age', 20)

map.set(
    'person1', {
        name: 'hassan',
        family: 'asghari',
        age: 21
    }
)
// console.log(map.get('person1'));



// map.set('sayHello', function(){
//     console.log('Hello');
// })

// map.get('sayHello')()

// console.log(map.has('person1'));
// console.log(map.size);

// map.delete('person1')
// console.log(map.size);

// map.clear()
// console.log(map.size);







// SET (unique values)
///////////////////////////////////////////////
let set1 = new Set()
set1.add('ali')
set1.add('ali') // does not matter if it is added before
set1.add({'name': 'ali'})
set1.add(true)
set1.add([1, 2, 3, 4, 5])
// console.log(set1);


set2 = new Set(['ali', 'hassan', 'akbari'])
// console.log(set2);



// set2.add('ali2')
// set2.delete('ali')
// set2.clear()
// console.log(set2);
// console.log(set2.size);



