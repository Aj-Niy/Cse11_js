let count = 0;
document.write("Starting Loop"+"<br>");
while (count < 10) {
    document.write("Current Count: " + count + "<br>");
    count++;
}
document.write("Loop Stopped!"+"<br>");

let age = 20;
if (age >= 18) {
    document.write("You are an adult!"+"<br>");
} else {    
    document.write("You are a minor!"+"<br>");
}

let grade = 'A';
document.write("Entering Switch Statement"+"<br>");
switch (grade) {
    case 'A':
        document.write("Excellent!"+"<br>");
        break;
    case 'B':
        document.write("Good!"+"<br>");
        break;
    case 'C':
        document.write("Average!"+"<br>");
        break;
    case 'D':
        document.write("Below Average!"+"<br>");
        break;
    case 'F':
        document.write("Failed!"+"<br>");
        break;
    default:
        document.write("Invalid Grade!"+"<br>");
}
//without parameter function
function  myFunction() {
    alert("Hello World!");
}
//with parameter function
function SayHello(name,age) {
    document.write(name + " is " + age + " years old!"+"<br>");
}

const person = {
    name: "John",
    age: 30,
    city: "New York"  
};
for(let x in person){
    document.write(x + ": " + person[x] + "<br>");
}
//arrow func
let adding =(a,b)=>{
    console.log(a+b);
}
adding(100,1);
//object creation 
let y=new Object();
y.name="John";
y.age=30;
y.city="New York";
//nested object 
let  person1={
    name:'jason',
    age:22
};
person1.address={};
person1.address.street="street1";
person1['address']['flatNo']=16;


//array
let arr=[11,22,33,44,55];
let myinfo= new Array();
myinfo[0]="John";
myinfo[1]=30;
myinfo[2]="New York";
let myinfo2=Array();
console.log(myinfo2,myinfo);//both new ans not using new is the same


let collection=[ {},[],true,"john",function(){},24,undefined,null,new String("hello"),new Date()];
for(let a in collection){
    console.log(collection[a]);
}
collection.techername="marking";
collection.ph=122345678;
console.log(collection.techername);
console.log(collection.ph);
console.log(collection.length);//length is 10 because it counts only the indexed elements not the properties
collection.length=24;
console.log(collection.length);//length is 24 but it does not change the indexed elements it just adds empty slots to the array
