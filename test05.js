//for-in ใช้กับ object
let obj = {
        name: "John",
        age: 30,
        city: ["New York", "London"],
        food: {
                favorite: "Pizza",
                dislike: "Burger"
        }
};
//การใช้งาน object
console.log(obj.name); // Output
console.log(obj.age);
console.log(obj.city);
console.log(obj.city[0]);
console.log(obj.city[1]);
console.log(obj.food);
console.log(obj.food.favorite); // Output
obj.name = "Sombat"
obj.age = 20
obj.city[0] = "Bangkok"
obj.city[1] = "Chiang Mai"
console.log(obj.name); // Output
console.log(obj.age);
console.log(obj.city);
console.log(obj.city[0]);
console.log(obj.city[1]); 
console.log('--------------------')

//การเข้าถึงทุกข้อมูลใน Object -> for-in
for (let xxx in obj) {
        console.log(xxx);
        console.log(obj[xxx])
}
