let employees = [];

function addEmployee() {

    const name = document.getElementById("name").value;
    const empId = document.getElementById("empId").value;
    const salary = parseFloat(document.getElementById("salary").value);
    const dept = document.getElementById("department").value;

    if(name === "" || empId === "" || dept === "" || isNaN(salary)){
        alert("Please fill all fields correctly!");
        return;
    }

    const emp = {
        name: name,
        id: empId,
        salary: salary,
        dept: dept
    };

    employees.push(emp);

    alert("Employee added!");

    
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}

function displayEmployees() {

    if(employees.length === 0){
        document.getElementById("result").innerHTML = "No employees added.";
        return;
    }

    let output = "<h3>All Employees</h3>";

    employees.forEach(emp => {
        output += `
            <div class="card">
                <p><strong>${emp.name}</strong> (${emp.id})</p>
                <p>${emp.dept}</p>
                <p>₹${emp.salary}</p>
            </div>
        `;
    });

    document.getElementById("result").innerHTML = output;
}

function filterSalary() {

    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h3>Salary > ₹50,000</h3>";

    filtered.forEach(emp => {
        output += `<p>${emp.name} - ₹${emp.salary}</p>`;
    });

    document.getElementById("result").innerHTML = output;
}

function totalSalary() {

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("result").innerHTML =
        `<h3>Total Salary: ₹${total}</h3>`;
}

function averageSalary() {

    if(employees.length === 0){
        document.getElementById("result").innerHTML = "No data";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("result").innerHTML =
        `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
}

function countDept() {

    let deptName = prompt("Enter Department:");

    let count = employees.filter(
        emp => emp.dept.toLowerCase() === deptName.toLowerCase()
    ).length;

    document.getElementById("result").innerHTML =
        `<h3>${deptName}: ${count} employees</h3>`;
}