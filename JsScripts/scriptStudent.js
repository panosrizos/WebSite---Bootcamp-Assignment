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
    formData["inputStudFirstName"] = document.getElementById("inputStudFirstName").value;
    formData["inputStudLastName"] = document.getElementById("inputStudLastName").value;
    formData["inputStudBirth"] = document.getElementById("inputStudBirth").value;
    formData["inputTuition"] = document.getElementById("inputTuition").value;
    return formData;
}

function insertRecord(data)
{
    let table = document.getElementById("studentInput").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.inputStudFirstName
    cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.inputStudLastName
    cell3 = newRow.insertCell(2);
    cell3.innerHTML=data.inputStudBirth
    cell4 = newRow.insertCell(3);
    cell4.innerHTML=data.inputTuition
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() 
{
    document.getElementById("inputStudFirstName").value = "";
    document.getElementById("inputStudLastName").value = "";
    document.getElementById("inputStudBirth").value = "";
    document.getElementById("inputTuition").value = "";
    selectedRow = null;
}

function onEdit(td) 
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputStudFirstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputStudLastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputStudBirth").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputTuition").value = selectedRow.cells[3].innerHTML;
    document.getElementById("butstud").innerHTML="Update";
        $('.btn').removeClass('btn-light').addClass('btn-danger ');
}

function updateRecord(formData) 
{
    selectedRow.cells[0].innerHTML = formData.inputStudFirstName;
    selectedRow.cells[1].innerHTML = formData.inputStudLastName;
    selectedRow.cells[2].innerHTML = formData.inputStudBirth;
    selectedRow.cells[3].innerHTML = formData.inputTuition;
    document.getElementById("butstud").innerHTML="Submit";
    $('.btn').removeClass('btn-danger').addClass('btn-light ');
    
}

function onDelete(td) 
{
    if (confirm('Delete record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentInput").deleteRow(row.rowIndex);
        resetForm();
    }
}
