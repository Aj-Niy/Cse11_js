let employees=[];
function addeEmployee(){
    const name=document.getElementById("employeeName").value;   
    const empId=document.getElementById("employeeId").value;
    const department=document.getElementById("department").value;
    let salary=parseFloat(document.getElementById("Salary").value);
    if(name==="" || empId==="" || department==="" || isNaN(salary)){
        alert("Please fill all the fields correctly.");
        return;
    }
    let emp={name:name, id:empId, dept:department, sal:salary};
    employees.push(emp);
    alert("Employee added successfully!");
    document.getElementById("employeeName").value="";
    document.getElementById("employeeId").value="";
    document.getElementById("department").value="";
    document.getElementById("Salary").value="";
    displayEmployees();

    function displayEmployees(){
        let output="<h3>All Employees:</h3><ul>";
        employees.forEach((emp)=>{
            output+=`
            Name: ${emp.name}, ID: ${emp.id}, Department: ${emp.dept}, Salary: ${emp.sal}
            `;

        });
        document.getElementById("result").innerHTML = output;
       
    }

    function filterSalary(){
        let filtered=employees.filter((emp)=>emp.sal>50000);
        let output="<h3>Employees with Salary > 50000:</h3><ul>";
        filtered.forEach((emp)=>{
            output+=`
            Name: ${emp.name}, ID: ${emp.id}, Department: ${emp.dept}, Salary: ${emp.sal}
            `;
        });
        document.getElementById("result").innerHTML = output;
    }

    function totalSalary(){
        let total = employees.reduce((sum,emp)=>sum+emp.sal,0);
        document.getElementById("result").innerHTML = `<h3>Total Salary Expenditure: ${total}</h3>`;
    }
    function averageSalary(){ 
        if(employees.length===0){  
            document.getElementById("result").innerHTML = "<h3>No employees to calculate average salary.</h3>";
            return;
        }
        let total = employees.reduce((sum,emp)=>sum+emp.sal,0);
        let average = total / employees.length;
        document.getElementById("result").innerHTML = `<h3>Average Salary: ${average.toFixed(2)}</h3>`;
    }
    function countDept(){
        let deptName= prompt("Enter department name to count employees:");
        let count=employees.filter((emp)=>emp.dept.toLowerCase()===deptName.toLowerCase()).length;
        document.getElementById("result").innerHTML = `<h3>Number of employees in ${deptName}: ${count}</h3>`;
    }
}