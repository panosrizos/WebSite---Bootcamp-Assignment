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
    formData["selectorTrainer"] = document.getElementById("selectorTrainer").value;
        return formData;
}

function insertRecord(data)
{
    let table = document.getElementById("trainerCourseInput").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.selectorCourse
    cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.selectorTrainer
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() 
{
    document.getElementById("selectorCourse").value = "";
    document.getElementById("selectorTrainer").value = "";
    selectedRow = null;
}

function onEdit(td) 
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("selectorCourse").value = selectedRow.cells[0].innerHTML;
    document.getElementById("selectorTrainer").value = selectedRow.cells[1].innerHTML;
    $('.btn').removeClass('btn-dark').addClass('btn-danger ');
    document.getElementById("butTrainerCourse").innerHTML="Update";
    $('.btn').removeClass('btn-light').addClass('btn-danger ');
}

function updateRecord(formData) 
{
    selectedRow.cells[0].innerHTML = formData.selectorCourse;
    selectedRow.cells[1].innerHTML = formData.selectorTrainer;
    document.getElementById("butTrainerCourse").innerHTML="Submit";
    $('.btn').removeClass('btn-danger').addClass('btn-light');
}

function onDelete(td) 
{
    if (confirm('Delete record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("trainerCourseInput").deleteRow(row.rowIndex);
        resetForm();
    }
}
