// Module
// import all
// import * as anotherfile from './anotherfile.js'

// import single variable
import { name } from './anotherfile.js'
import { family } from './anotherfile.js'

// import function
import { showFullName } from './anotherfile.js'

// import multiple variable
import { a, b, c, addNumbers } from './anotherfile.js'

// import from alias
import { esm, faamili } from './anotherfile.js'

// import with alias
import { esm as esm2, faamili as faamili2 } from './anotherfile.js'


// import by alias
import { cpu as Pardazandeh, ram as hafese } from './anotherfile.js'

// import default
import sum from './anotherfile.js'


console.log(name)
console.log(family)
console.log(showFullName())


console.log(a + b + c)
console.log(addNumbers())


console.log(esm + ' ' + faamili)
console.log(esm2 + ' ' + faamili2)

console.log(`CPU is ${Pardazandeh} and Memroy is ${hafese}`)
console.log(`Sum is ${sum}`)