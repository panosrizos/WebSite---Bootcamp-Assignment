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
    formData["inputTitle"] = document.getElementById("inputTitle").value;
    formData["inputDescription"] = document.getElementById("inputDescription").value;
    formData["inputSubDate"] = document.getElementById("inputSubDate").value;
    formData["inputOralMark"] = document.getElementById("inputOralMark").value;
    formData["inputTotalMark"] = document.getElementById("inputTotalMark").value;
    return formData;
}

function insertRecord(data)
{
    let table = document.getElementById("assignmentInput").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.inputTitle
    cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.inputDescription
    cell3 = newRow.insertCell(2);
    cell3.innerHTML=data.inputSubDate
    cell4 = newRow.insertCell(3);
    cell4.innerHTML=data.inputOralMark
    cell5 = newRow.insertCell(4);
    cell5.innerHTML=data.inputTotalMark
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() 
{
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDescription").value = "";
    document.getElementById("inputSubDate").value = "";
    document.getElementById("inputOralMark").value = "";
    document.getElementById("inputTotalMark").value = "";
    selectedRow = null;
}

function onEdit(td) 
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputTitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputDescription").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputSubDate").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputOralMark").value = selectedRow.cells[3].innerHTML;
    document.getElementById("inputTotalMark").value = selectedRow.cells[4].innerHTML;
    document.getElementById("butass").innerHTML="Update";
    $('.btn').removeClass('btn-light').addClass('btn-danger');
    
}


function updateRecord(formData) 
{
    selectedRow.cells[0].innerHTML = formData.inputTitle;
    selectedRow.cells[1].innerHTML = formData.inputDescription;
    selectedRow.cells[2].innerHTML = formData.inputSubDate;
    selectedRow.cells[3].innerHTML = formData.inputOralMark;
    selectedRow.cells[4].innerHTML = formData.inputTotalMark;
    document.getElementById("butass").innerHTML="Submit";
    $('.btn').removeClass('btn-danger').addClass(' btn-light ');
}

function onDelete(td) 
{
    if (confirm('Delete record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("assignmentInput").deleteRow(row.rowIndex);
        resetForm();
    }
}