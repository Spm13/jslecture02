// Call back function
// การส่งค่าฟังก์ชันซึ่งเรียกว่า argument ไปให้กับ parameter ของฟังก์ชัน แล้วไปเรียกในตัวฟังก์ชันที่ส่งไปให้

function FuncA(a, b){
        console.log(a)
        console.log(b)
}
funcA(10, 20)
//----------------------------
function funcC(){
        console.log('Hello...')
}
function funcB(x, y){
        console.log(x)
        y() //call back function
}

funcB(555, function(){ console.log('Wow')} )

funcB(999, () => console.log('Hi') )

funcB(111, funcC)