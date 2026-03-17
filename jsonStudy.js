//format members[0].powers[2]


let person = {
    name: "John",
    age: 30,
    city: "New York",
    powers: ["flight", "super strength", "invisibility"]
};

for(let key in person){
    console.log(key + ": " + person[key]);
}
let arr=[22,44,2,10,7];
for(let value of arr){
    console.log(value);
}
//Higher order function--> Aroow function , as it can be ppassed a san argument to another function
const add = (a, b) => {
    return a + b;
};