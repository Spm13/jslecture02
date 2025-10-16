//Expression Function
//1. Named Function Expression
let aa = function showHi(){
        console.log('Hi...')
}

const bb = function showHey(){
        console.log('Hey...')
}
//2. Anonymous Function Expression
let cc = function(){
        console.log('Wow...', xx)
}

let dd = function(){
        return 'Woo...'
}

//การใช้งานฟังก์ชันที่เก็บในตัวแปร จะต้องใช้งานผ่านตัวแปร
//โดยเขียนเหทือนกับการเรียกใช้ฟังก์ชัน
aa()
bb()
cc('Sombat')
console.log( dd() )
dd = 555
console.log( dd )