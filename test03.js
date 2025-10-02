//Operator

// Aritmetic
// + - * / % **

// Increament เพิ่มตัวเองทีละ 1, Decreament ลดตัวเองทีละ 1
// ++, --

// Comparison
// > < >= <= == != === !== ไม่คำนึงถึงชนิดข้อมูล
// === !== คำนึงถึงชนิดข้อมูล
console.log(10 == '10') // true
console.log(10 === '10') // false

// logical
// && !

// Nullish Coalescing Operator
// ?? ดูว่าหน้าเครื่องหมายเป็น null หรือ undefined หรือไม่
let x = null
let y = 20
let z
console.log(x ?? 'Hello')
console.log(y ?? 'Hi')
console.log(z ?? 'Wow')
console.log('--------------')

// Ternary Operator
// เงื่อนไข ? ทำ/ได้เมื่อเงื่อนไขเป็นจริง : ทำ/ได้เมื่อเงื่อนไขเป็นจริง
console.log(10 < 20 ? 'Hello...' : 'Hey....')

console.log(100 < 200 ? 'Wow' : 200 < 300 ? 'Hi' : 'Bye')

// Assignment Operator
// = += -= *= /= %= **=