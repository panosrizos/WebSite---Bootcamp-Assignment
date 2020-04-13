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
    formData["selectorCourse"] = document.getElementById("selectorCourse").value;
    formData["selectorAssignment"] = document.getElementById("selectorAssignment").value;
        return formData;
}

function insertRecord(data)
{
    let table = document.getElementById("AssCourseInput").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.selectorCourse
    cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.selectorAssignment
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() 
{
    document.getElementById("selectorCourse").value = "";
    document.getElementById("selectorAssignment").value = "";
    selectedRow = null;
}

function onEdit(td) 
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("selectorCourse").value = selectedRow.cells[0].innerHTML;
    document.getElementById("selectorAssignment").value = selectedRow.cells[1].innerHTML;
    document.getElementById("butAssCourse").innerHTML="Update";
    $('.btn').removeClass('btn-light').addClass('btn-danger ');
}

function updateRecord(formData) 
{
    selectedRow.cells[0].innerHTML = formData.selectorCourse;
    selectedRow.cells[1].innerHTML = formData.selectorAssignment;
    document.getElementById("butAssCourse").innerHTML="Submit";
    $('.btn').removeClass('btn-danger').addClass('btn-light ');
}

function onDelete(td) 
{
    if (confirm('Delete record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("AssCourseInput").deleteRow(row.rowIndex);
        resetForm();
    }
}
