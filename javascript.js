

var selectedIndex = null;
var array1 = new Array(); 
array1.push({"Id":"1","sutinev":"Süni","sutitipus":"vegyes","dijazott":"London"});

array1.push({"Id":"2","sutinev":"Gesztenyealagut","sutitipus":"vegyes","dijazott":"Paris"});
printArray();

function printArray(){
var table = document.getElementById("sutiList").getElementsByTagName('tbody')[0];

table.innerHTML="";
var newRow;
for (i = 0; i < array1.length; i++) {

newRow = table.insertRow(table.length);

cell1 = newRow.insertCell(0);

cell1.innerHTML = array1[i].Id;
cell2 = newRow.insertCell(1);
cell2.innerHTML = array1[i].sutinev;
cell3 = newRow.insertCell(2);
cell3.innerHTML = array1[i].sutitipus;
cell4 = newRow.insertCell(3);
cell4.innerHTML = array1[i].dijazott;
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
formData["sutitipus"] = document.getElementById("sutitipus").value;
formData["dijazott"] = document.getElementById("dijazott").value;
return formData;
}

function insertNewRecord(data) {

array1.push({"Id":data.Id,"sutinev":data.sutinev,"sutitipus":data.sutitipus,"dijazott":data.dijazott});

printArray();
}

function resetForm() {
document.getElementById("Id").value = "";
document.getElementById("sutinev").value = "";
document.getElementById("sutitipus").value = "";
document.getElementById("dijazott").value = "";

selectedIndex=null;
}

function onEdit(index) {
document.getElementById("Id").value = array1[index].Id;
document.getElementById("sutinev").value = array1[index].sutinev;
document.getElementById("sutitipus").value = array1[index].sutitipus;
document.getElementById("dijazott").value = array1[index].dijazott;
selectedIndex=index;
}

function updateRecord(formData) {
array1[selectedIndex].Id=formData.Id;
array1[selectedIndex].sutinev=formData.sutinev;
array1[selectedIndex].sutitipus=formData.sutitipus;
array1[selectedIndex].dijazott=formData.dijazott;
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