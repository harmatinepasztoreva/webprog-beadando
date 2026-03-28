

var selectedIndex = null;
var array1 = new Array(); 
array1.push({"Id":"1","sutinev":"Süni","salary":"2000","city":"London"});

array1.push({"Id":"2","sutinev":"Gesztenyealagut","salary":"2500","city":"Paris"});
printArray();

function printArray(){
var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];

table.innerHTML="";
var newRow;
for (i = 0; i < array1.length; i++) {

newRow = table.insertRow(table.length);

cell1 = newRow.insertCell(0);

cell1.innerHTML = array1[i].Id;
cell2 = newRow.insertCell(1);
cell2.innerHTML = array1[i].sutinev;
cell3 = newRow.insertCell(2);
cell3.innerHTML = array1[i].salary;
cell4 = newRow.insertCell(3);
cell4.innerHTML = array1[i].city;
cell4 = newRow.insertCell(4);

cell4.innerHTML = '<a onClick="onEdit('+i+')">Edit</a>' + '<a onClick="onDelete('+i+')">Delete</a>';
}
}

function onFormSubmit() {

if (validate()) {

var formData = readFormData();

if (selectedIndex==null)
insertNewRecord(formData);
else
updateRecord(formData);
resetForm();
}
}

function readFormData() {
var formData = {};
formData["Id"] = document.getElementById("Id").value;
formData["sutinev"] = document.getElementById("sutinev").value;
formData["salary"] = document.getElementById("salary").value;
formData["city"] = document.getElementById("city").value;
return formData;
}

function insertNewRecord(data) {

array1.push({"Id":data.Id,"sutinev":data.sutinev,"salary":data.salary,"city":data.city});

printArray();
}

function resetForm() {
document.getElementById("Id").value = "";
document.getElementById("sutinev").value = "";
document.getElementById("salary").value = "";
document.getElementById("city").value = "";

selectedIndex=null;
}

function onEdit(index) {
document.getElementById("Id").value = array1[index].Id;
document.getElementById("sutinev").value = array1[index].sutinev;
document.getElementById("salary").value = array1[index].salary;
document.getElementById("city").value = array1[index].city;
selectedIndex=index;
}

function updateRecord(formData) {
array1[selectedIndex].Id=formData.Id;
array1[selectedIndex].sutinev=formData.sutinev;
array1[selectedIndex].salary=formData.salary;
array1[selectedIndex].city=formData.city;
printArray();
}
function onDelete(index) {

if (confirm('Are you sure to delete this record ?')) {
array1.splice(index, 1);
resetForm();
printArray();
}
}

function validate() {
isValid = true;

if (document.getElementById("Id").value == "") {
isValid = false;

document.getElementById("IdValidationError").classList.remove("hide");
} else {

isValid = true;

if (!document.getElementById("IdValidationError").classList.contains("hide"))
document.getElementById("IdValidationError").classList.add("hide");
}
return isValid;
}