
let selectedRow=null;
function details(){

  var formData=readData();
  if(selectedRow==null)
  insertRecord(formData);
  else
  updateRecord(formData);
  reset();
}
function readData()
{
  let person ={};
person["first_name"] = (document.getElementById("txt_first") as HTMLInputElement).value;
person["last_name"] = (document.getElementById("txt_last") as HTMLInputElement).value;
person["email"]= (document.getElementById("txt_email")as HTMLInputElement).value;
person["city"] = (document.getElementById("txt_city")as HTMLInputElement).value;
person["Address"] = (document.getElementById("txt_Address")as HTMLInputElement).value;
return person;
}
function insertRecord(data){
  let table=document.getElementById("tab").getElementsByTagName('tbody')[0];
let nrow=table.insertRow(table.rows.length);
let cell1=nrow.insertCell(0);
cell1.innerHTML= data.first_name;
let cell2=nrow.insertCell(1);
cell2.innerHTML=data.last_name
let cell3=nrow.insertCell(2);
cell3.innerHTML=data.email
let cell4=nrow.insertCell(3);
cell4.innerHTML=data.city
let cell5=nrow.insertCell(4);
cell5.innerHTML=data.Address;
let cell6=nrow.insertCell(5);
cell6.innerHTML=`<a class="pointer" onClick="onEdit(this);">Edit</a>`;
}
function onEdit(td)
{
selectedRow=td.parentElement.parentElement;
(document.getElementById("txt_first") as HTMLLIElement).value=selectedRow.cells[0].innerHTML;
(document.getElementById("txt_last") as HTMLLIElement).value=selectedRow.cells[1].innerHTML;
(document.getElementById("txt_email") as HTMLLIElement).value=selectedRow.cells[2].innerHTML;
(document.getElementById("txt_city") as HTMLLIElement).value=selectedRow.cells[3].innerHTML;
(document.getElementById("txt_Address") as HTMLLIElement).value=selectedRow.cells[4].innerHTML;

}
function updateRecord(formData)
{
  selectedRow.cells[0].innerHTML=formData.first_name;
  selectedRow.cells[1].innerHTML=formData.last_name;
  selectedRow.cells[2].innerHTML=formData.email;
  selectedRow.cells[3].innerHTML=formData.city;
  selectedRow.cells[4].innerHTML=formData.Address;
}
function reset(){
  (document.getElementById("txt_first")as HTMLLIElement).value=null;
  (document.getElementById("txt_last")as HTMLLIElement).value= null;
  (document.getElementById("txt_email") as HTMLLIElement).value=null;
  (document.getElementById("txt_city") as HTMLLIElement).value=null;
  (document.getElementById("txt_Address") as HTMLLIElement).value=null;
  selectedRow = null;
}



 