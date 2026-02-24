console.log("Hello, World!");
document.write("This is a simple JavaScript file.");
document.write("<br>");


let num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="hello bro";
console.log(num);
console.log(typeof(num));
num=null;
console.log(typeof(num));
console.log(typeof(num));
let x=undefined;
console.log(x);
console.log(typeof(x));

//func
let sayHello=function(){    //camelCase
    alert("Hello");
}
sayHello();

//array
let numArray=[1,2,3,4,5];
let animals= new Array("cat","dog","rabbit");

//object
let person={
    name:"John",
    age:30,
    title:"New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.title);

//symbol
let sym1=Symbol("4");
console.log(sym1);
let sym2=Symbol("4");
console.log(sym2);
if(sym1===sym2){
    console.log("true");
}else{
    console.log("false");
}
console.log(sym1===sym2); //false


//loop
document.write("Loop Started"+"<br>");
let count;
for(count=0;count<=10;count++){
    document.write(count);
}
document.write("<br>");
document.write("Loop Stopped");