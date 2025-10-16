//4. have parameters, has return
function funcG(a, b, c){
        let result = a * b * c;
        return result / 3;
}

function funcH(fname, lname){
        return `${fname} ${lname}`
}

console.log(funcG(10, 20, 30)); //argument
console.log(funcH("John", "Doe"));

let fullName = funcH("Jame", "Snitch")
console.log(fullname)