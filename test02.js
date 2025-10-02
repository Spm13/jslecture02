//Global คือ ใช้ที่ไหนก็ได้
//Local คือ ใช้เฉพราะภายใน Code Block { ..... } นั้นๆ เท่านั้น

//Variable ตัวแปร
var data1 = 111; //เลี่ยงได้เลี่ยง เปลี่ยนค่าได้ เป็นGlobal
let data2 = 222; //แนะนำ เปลี่ยนค่าได้ เป็นLocal
const data3 = 333; //แนะนำ เปลี่ยนค่าได้ เป็นLocal

console.log(data1);
console.log(data2);
console.log(data3);

console.log("-------------------------");

{
        var data4 = 444;
        let data5 = 555;
        const data6 = 666;
        console.log(data1);
        console.log(data2);
        console.log(data3);
        console.log(data4);
        console.log(data5);
        console.log(data6);
        {
        console.log(data1);
        console.log(data2);
        console.log(data3);
        console.log(data4);
        console.log(data5);
        console.log(data6);
        }
}

console.log("-------------------------");
        console.log(data1);
        console.log(data2);
        console.log(data3);
        console.log(data4);
       // console.log(data5); Error
       // console.log(data6); Error
