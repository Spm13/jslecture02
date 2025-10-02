// เรียก Single line comment

/*
 Multi
 line
 comment
*/

//คำสั่งสำหรับ Dev. ในการ Debug ค่าใดๆ ออกมา
//String
console.log("AAA...${10+20} true")
console.log('BBB...${10+20}')
console.log(`CCC...${10+20} ${true}`)

//Number
console.log(111); //integer
console.log(234.23424); //float

//Boolean
console.log(true);
console.log(false);

//null
console.log(null);

//array คือ ข้อมูลหลายๆ ข้อมูลที่มี index number กำกับ
console.log([10, 20, 30, 40, 50]);
console.log([111, 222, "AAA", true]);
console.log([
        111, 
        222, 
        "AAA", 
        true, 
        ["A", "B", "C"], 
        {
        name: "AAA",
        age: 20,
        },
 null])
//object คือ ข้อมูลหลายๆข้อมูล โดยจะมีรูปแบบเป็นkey : value
console.log({
        name: "AAA",
        age: 20,
        food:['KFC', 'Pizza', 'Sushi'],
        isMarried: true,
        address: {
                city: 'Bangkok',
                country: 'Thailand'
        }
})
//undefine
let x //สร้างตัวแปร x
console.log(x)