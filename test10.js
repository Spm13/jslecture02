//3. no parameters, has return
funcE() //ทำได้ แต่ไม่ควรทำ
console.log( funcF() ) //ทำได้ แต่ไม่ควรทำ
function funcE( ){
        console.log('Wow...')
        return 100;
}

function funcF( ){
        let x = 100
        return x * 2;
}

funcE() //ทำได้ แต่ไม่ควรทำ เพราะมันมีค่าที่ return ส่งกลับมา
funcE() //ทำได้ แต่ไม่ควรทำ เพราะมันมีค่าที่ return ส่งกลับมา

console.log( funcE() )
let xx = funcF()
console.log( xx )