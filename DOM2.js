// const result = document.getElementById("para");
// result.innerHTML = "This is a new paragraph created using JavaScript.";
// result.title = "This is a new title";

// let x = document.getElementsByClassName("class1");
// x[1].style.color = "blue";
// let tagg=document.getElementsByTagName("p");
// //combination of all-query selector()
// let first = document.querySelector("p.class1");
// let all= document.querySelectorAll("p.class2");



// let child=document.querySelectorAll("ul li");
// for(x in child){
//     child[x].style.fontSize="20px";
//     child[x].style.fontWeight="bold";
//     child[x].style.color="violet";
// }

// let ele=document.getElementById("attri");
// let class4=ele.getAttribute("class");
// document.getElementById("demo").innerHTML = "The class of the element is: " + class4;

function changeContent(){
    document.getElementById("attri").setAttribute("class","democlass2");
    alert("Class attribute changed to democlass2");

}


//creating element
let newPara=document.createElement("p");
newPara.innerHTML="This is a new paragraph created using createElement() method.";
document.body.appendChild(newPara);


const heading = document.createElement("h1");
const bodytag=document.querySelector("body");
heading.textContent = "This is a heading created using createElement() method.";
bodytag.appendChild(heading);


//Node.remove();

//Events in JS
//1) mouse events
function changeColor(element) {
     element.style.backgroundColor = "yellow";
}
function resetColor(element) {
    element.style.backgroundColor = "";
}
//2) keyboard events

//3) form events
const x=document.querySelector("input");
x.addEventListener("focus", changeColor);
x.addEventListener("blur", resetColor);

//4) window events
function myBodyFunction() {
    alert("The page has finished loading!");
}
function myResizeFunction() {
    alert("The window has been resized!");
}
function myUnloadFunction() {
    alert("The page is about to be unloaded!");
}