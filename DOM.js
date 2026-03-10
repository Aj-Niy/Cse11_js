const result = document.getElementById("para");
result.innerHTML = "This is a new paragraph created using JavaScript.";
result.innerText = "This is a new paragraph too.";
result.title="mynmae";
console.log(result);

//getElementsByClassName,getElementsByTagName,querySelector;


const result2=document.getElementsByTagName("para");
result2[0].style.fontSize="20px";
result2[0].style.backgroundColor="yellow";
result2[1].style.fontSize="30px";
result2[1].style.color="purple";

result2[2].style.fontSize="40px";



const result3=document.querySelectorAll("p");
result3.forEach((element)=>{
    element.style.fontFamily="Arial";
    element.style.border="1px solid blue";
    element.style.padding="10px";
    element.style.margin="10px";
});

const x2=document.querySelectorAll("ul li");
for(ele in x2){
    x2[ele].style.backgroundColor="lightgray";
    x2[ele].style.padding="5px";
    x2[ele].style.font="24px";
    x2[ele].style.color="red";

}

