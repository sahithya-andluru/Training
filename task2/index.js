var selectedRow = null;
function details() {
    var formData = readData();
    if (selectedRow == null)
        insertRecord(formData);
    else
        updateRecord(formData);
    reset();
}
function readData() {
    var person = {};
    person["first_name"] = document.getElementById("txt_first").value;
    person["last_name"] = document.getElementById("txt_last").value;
    person["email"] = document.getElementById("txt_email").value;
    person["city"] = document.getElementById("txt_city").value;
    person["Address"] = document.getElementById("txt_Address").value;
    return person;
}
function insertRecord(data) {
    var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
    var nrow = table.insertRow(table.rows.length);
    var cell1 = nrow.insertCell(0);
    cell1.innerHTML = data.first_name;
    var cell2 = nrow.insertCell(1);
    cell2.innerHTML = data.last_name;
    var cell3 = nrow.insertCell(2);
    cell3.innerHTML = data.email;
    var cell4 = nrow.insertCell(3);
    cell4.innerHTML = data.city;
    var cell5 = nrow.insertCell(4);
    cell5.innerHTML = data.Address;
    var cell6 = nrow.insertCell(5);
    cell6.innerHTML = "<a class=\"pointer\" onClick=\"onEdit(this);\">Edit</a>";
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("txt_first").value = selectedRow.cells[0].innerHTML;
    document.getElementById("txt_last").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txt_email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("txt_city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("txt_Address").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.first_name;
    selectedRow.cells[1].innerHTML = formData.last_name;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.Address;
}
function reset() {
    document.getElementById("txt_first").value = null;
    document.getElementById("txt_last").value = null;
    document.getElementById("txt_email").value = null;
    document.getElementById("txt_city").value = null;
    document.getElementById("txt_Address").value = null;
    selectedRow = null;
}
