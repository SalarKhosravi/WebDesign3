alert('Hello form EXTERNAL script')
console.log('Hello from console log')
console.log(123) //numbers are blue
console.log(true) //numbers are blue



var x = 'Ali'
console.log(x);         // Variable


console.log([1, 2, 3, 4])       // array




console.log({"a": 1, "b": 2})   // object
console.table({"a": 1, "b": 2})   
console.error('from error')   
console.warn('from warn')   
// console.clear()   



// show time to calculate
console.time('timeIndex01')

    for (let i = 0; i < 100; i++) {
        console.log(i)
    }

console.timeEnd('timeIndex01')