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