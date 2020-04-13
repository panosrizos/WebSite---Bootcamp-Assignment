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
    formData["inputStream"] = document.getElementById("inputStream").value;
    formData["inputType"] = document.getElementById("inputType").value;
    formData["inputStartDate"] = document.getElementById("inputStartDate").value;
    formData["inputEndDate"] = document.getElementById("inputEndDate").value;
    return formData;
}

function insertRecord(data)
{
    let table = document.getElementById("courseInput").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.inputTitle
    cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.inputStream
    cell3 = newRow.insertCell(2);
    cell3.innerHTML=data.inputType
    cell4 = newRow.insertCell(3);
    cell4.innerHTML=data.inputStartDate
    cell5 = newRow.insertCell(4);
    cell5.innerHTML=data.inputEndDate
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() 
{
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputStream").value = "";
    document.getElementById("inputType").value = "";
    document.getElementById("inputStartDate").value = "";
    document.getElementById("inputEndDate").value = "";
    selectedRow = null;
}

function onEdit(td) 
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputTitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputStream").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputType").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputStartDate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("inputEndDate").value = selectedRow.cells[4].innerHTML;
    document.getElementById("butc").innerHTML="Update";
        $('.btn').removeClass('btn-light').addClass('btn-danger ');
}

function updateRecord(formData) 
{
    selectedRow.cells[0].innerHTML = formData.inputTitle;
    selectedRow.cells[1].innerHTML = formData.inputStream;
    selectedRow.cells[2].innerHTML = formData.inputType;
    selectedRow.cells[3].innerHTML = formData.inputStartDate;
    selectedRow.cells[4].innerHTML = formData.inputEndDate;
    document.getElementById("butc").innerHTML="Submit";
    $('.btn').removeClass('btn-danger').addClass('btn-light ');
}

function onDelete(td) 
{
    if (confirm('Delete record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("courseInput").deleteRow(row.rowIndex);
        resetForm();
    }
}