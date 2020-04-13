var selectedRow = null;

function onSubmit(){
    let formData = getData();
    if (selectedRow === null)
    insertRecord(formData);
    else
    updateRecord(formData);
    resetForm();
}
function getData(){
    var formData = {};
    formData["inputFirstName1"] = document.getElementById("inputFirstName1").value;
    formData["inputLastName1"] = document.getElementById("inputLastName1").value;
    formData["inputSubject"] = document.getElementById("inputSubject").value;
    return formData;
}

function insertRecord(data)
{
    let table = document.getElementById("trainerInput").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.inputFirstName1
    cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.inputLastName1
    cell3 = newRow.insertCell(2);
    cell3.innerHTML=data.inputSubject
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() 
{
    document.getElementById("inputFirstName1").value = "";
    document.getElementById("inputLastName1").value = "";
    document.getElementById("inputSubject").value = "";
    selectedRow = null;
}

function onEdit(td) 
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputFirstName1").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputLastName1").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputSubject").value = selectedRow.cells[2].innerHTML;
    document.getElementById("buttr").innerHTML="Update";
    $('.btn').removeClass('btn-light').addClass('btn-danger ');

}

function updateRecord(formData) 
{
    selectedRow.cells[0].innerHTML = formData.inputFirstName1;
    selectedRow.cells[1].innerHTML = formData.inputLastName1;
    selectedRow.cells[2].innerHTML = formData.inputSubject;
    document.getElementById("buttr").innerHTML="Submit";
    $('.btn').removeClass('btn-danger').addClass('btn-light ');
   
}

function onDelete(td) 
{
    if (confirm('Delete record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("trainerInput").deleteRow(row.rowIndex);
        resetForm();
    }
}



