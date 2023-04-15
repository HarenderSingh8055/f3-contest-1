let inputName = document.querySelector("#inputName");
let inputProfession = document.querySelector("#inputProfession");
let inputAge = document.querySelector("#inputAge");
let employeeList = document.querySelector("#employeeList");
let errorMessage = document.querySelector(".errorMessage");
let successMessage = document.querySelector(".successMessage");
let formSubmit = document.querySelector("form");
let zeroEmployee = document.querySelector(".zeroEmployee");

let employee = [];
let count = 1;

formSubmit.addEventListener("submit", addUser);

function addUser(e) {
    e.preventDefault();
    console.log("adduser")
    if(inputName.value===""||inputProfession.value===""||inputAge.value===""){
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    }else{
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
        employee.push({
            id:count++,
            name:inputName.value,
            profession:inputProfession.value,
            age:inputAge.value
        })
    
        showEmployee(employee);
        inputName.value = "";
        inputProfession.value = "";
        inputAge.value = "";
    }
}

function showEmployee(arr){
    if(arr.length>0){
        zeroEmployee.style.display="none";
        employeeList.innerHTML = "";
    
        arr.map((item,index)=>{
            employeeList.innerHTML += `
            <div class="employeeWrapper">
                <div class="employee">
                    <span>${index + 1}</span>
                    <span>Name : ${item.name}</span>
                    <span>Profession : ${item.profession} </span>
                    <span>Age: ${item.age}</span>
                </div>
                <button onclick="deleteUser(${index})">Delete User</button>
                </div>
                `
            })
        }else{
            zeroEmployee.style.display="block";
            employeeList.innerHTML = "";
        }
    // console.log(arr)
}

function deleteUser(id){
    employee.splice(id,1);
    showEmployee(employee);
    successMessage.style.display = "none";
}


