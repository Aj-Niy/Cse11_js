calculateResult = () => {
    const n=document.getElementById("subjects").value;
    let sum=0;
    let i=0;
    for(i=0;i<n;i++){

        let x=parseFloat(prompt("Enter marks for subject "+(i+1)));
        sum+=x;
    }
    let avg=sum/n;
    let grade;
    if(avg>90){
        grade="A+";
    }else if(avg>75){
        grade="A";
    }else if(avg>60){
        grade="B+";
    }else if(avg>40){
        grade="B";
    }else{
        grade="F";
    }
    let r;
    if(avg>40){
        r="Passed";
    }else{
        r="Failed";
    }
    let result=document.getElementById("result");
    result.innerHTML="Total: "+sum+"<br>Average: "+avg.toFixed(2)+"<br>Grade: "+grade+"<br>Result: "+r;
}