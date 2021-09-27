class person{
    first_name:string
    last_name:string
    email:string
    city:string
    Address:string
    constructor(first_name:string,last_name:string,email:string,city:string,Address:string){
        this.first_name=first_name
        this.last_name=last_name
        this.email=email
        this.city=city
        this.Address=Address
    }
}
let a1:person[]=[]
function details(){
let first_name:string = document.getElementById("inp")[0].value
let last_name:string = document.getElementById("inp")[1].value
let email:string = document.getElementById("inp")[2].value
let city:string = document.getElementById("inp")[3].value
let Address:string = document.getElementById("inp")[4].value
let obj=new person(first_name,last_name,email,city,Address)
a1.push(obj)
//document.getElementById("gr").innerHTML="welcome" 
//let mybody = document.getElementsByTagName("table");
let mybody = document.getElementById("tab");
//let mytable = document.createElement("table");
//let mytablebody = document.createElement("tbody");
for(var j = 0; j < a1.length; j++) {
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
            //mytablebody.appendChild(mycurrent_row);
        }

        //mytable.appendChild(mytablebody);
        //mybody.appendChild(mytable);
    

}
 