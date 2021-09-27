var person = /** @class */ (function () {
    function person(first_name, last_name, email, city, Address) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.city = city;
        this.Address = Address;
    }
    return person;
}());
var a1 = [];
function details() {
    var first_name = document.getElementById("inp")[0].value;
    var last_name = document.getElementById("inp")[1].value;
    var email = document.getElementById("inp")[2].value;
    var city = document.getElementById("inp")[3].value;
    var Address = document.getElementById("inp")[4].value;
    var obj = new person(first_name, last_name, email, city, Address);
    a1.push(obj);
    //document.getElementById("gr").innerHTML="welcome" 
    //let mybody = document.getElementsByTagName("table");
    var mybody = document.getElementsByTagName("body")[0];
    var mytable = document.createElement("table");
    var mytablebody = document.createElement("tbody");
    for (var j = 0; j < a1.length; j++) {
        var mycurrent_row = document.createElement("tr");
        var mycurrent_cell = document.createElement("td");
        var currenttext = document.createTextNode(a1[j].first_name);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);
        var mycurrent_cell = document.createElement("td");
        var currenttext = document.createTextNode(a1[j].last_name);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);
        var mycurrent_cell = document.createElement("td");
        var currenttext = document.createTextNode(a1[j].email);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);
        var mycurrent_cell = document.createElement("td");
        var currenttext = document.createTextNode(a1[j].city);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);
        var mycurrent_cell = document.createElement("td");
        var currenttext = document.createTextNode(a1[j].Address);
        mycurrent_cell.appendChild(currenttext);
        mycurrent_row.appendChild(mycurrent_cell);
        mytablebody.appendChild(mycurrent_row);
    }
    mytable.appendChild(mytablebody);
    mybody.appendChild(mytable);
}
