function calculateResult() {

    const n = parseInt(document.getElementById("subjects").value);

    if(!n || n <= 0){
        alert("Please enter a valid number of subjects");
        return;
    }

    let sum = 0;

    for(let i = 0; i < n; i++){

        let marks = parseFloat(prompt("Enter marks for subject " + (i+1)));

        if(isNaN(marks)){
            alert("Invalid marks entered");
            return;
        }

        sum += marks;
    }

    let avg = sum / n;

    let grade;

    if(avg >= 90){
        grade = "A+";
    }
    else if(avg >= 75){
        grade = "A";
    }
    else if(avg >= 60){
        grade = "B+";
    }
    else if(avg >= 40){
        grade = "B";
    }
    else{
        grade = "F";
    }

    let resultStatus = (avg >= 40) ? "Passed ✅" : "Failed ❌";

    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <h2>Result Summary</h2>
        <p><strong>Total Marks:</strong> ${sum}</p>
        <p><strong>Average Marks:</strong> ${avg.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${resultStatus}</p>
    `;
}