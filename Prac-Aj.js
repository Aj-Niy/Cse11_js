function calculateGrade(){
    let n=document.getElementById("subjects").value;

    let total=0;

    for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("Enter marks for subject "+i));
        total+=marks;
    }

    let average=total/n;

    let grade;
    if(average>=90){
        grade="A";
    }else if(average>=80){
        grade="B";
    }else if(average>=70){
        grade="C";
    }else if(average>=60){
        grade="D";
    }else{
        grade="F";

    }
    let final= (average>=60) ? "Passed✅" : "Failed ❌";

    document.getElementById("result").innerHTML="Total:"+total+"<br>Average: "+average+"<br>Grade: "+grade+"<br>Status: "+final;
}