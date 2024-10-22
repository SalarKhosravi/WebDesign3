// export data
// --------------------------------
let name = 'ali'
export { name }

// export data
let family = 'akbari'
export { family }






// export function
// --------------------------------
function showFullName() {
    return `${name} ${family}`
}
export { showFullName }










// export multiple value and functions
// --------------------------------
let a = 1
let b = 2
let c = 3

function addNumbers() {
    return a + b + c
}
export { a, b, c, addNumbers }







// export with alias
// --------------------------------
let fname = 'ali'
let lname = 'akbari'

export { fname as esm, lname as faamili }






// export for alias
// --------------------------------
let cpu = '7i'
let ram = '16GB'

export { cpu , ram }



// export default
// --------------------------------
let sum = 13
export default sum  