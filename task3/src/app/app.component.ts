import { Component,ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
function actionCellRenderer(params:any) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell:any) => {
    return cell.rowIndex === params.node.rowIndex;
  });

  if (isCurrentRowEditing) {
    eGui.innerHTML = `
<button  class="action-button update"  data-action="update"> update  </button>
<button  class="action-button cancel"  data-action="cancel" > cancel </button>
`;
  } else {
    eGui.innerHTML = `
<button class="action-button edit"  data-action="edit" > edit  </button>
<button class="action-button delete" data-action="delete" > delete </button>
`;
  }

  return eGui;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegForm2';
  public columnDefs:any;
  public gridApi:any;
  public defaultColDef:any;
  public gridColumnApi:any;
  public sortingOrder:any;
  public rowData:any;
  constructor(){
    this.columnDefs=[
      {headerName:"First_Name",
       field:"first_name",
       width:200,
       sortable:true,
       pagination:true,
       filter:true
      },
      {headerName:"Last_Name",
       field:"last_name",
       width:200,
       sortable:true,
       filter:true
      },
      {headerName:"Email",
       field:"email",
       width:200,
       sortable:true,
       filter:true
      },
      {headerName:"City",
       field:"city",
       width:150,
       sortable:true,
       filter:true
      },
      {headerName:"Address",
       field:"address",
       width:250,
       sortable:true,
       filter:true
      },
      {
        headerName: "action",
        minWidth: 150,
        cellRenderer: actionCellRenderer,
        editable: false,
        colId: "action"
      }
    ];
    this.defaultColDef = {
      editable: true
  };
}
  onGridReady(params:any)
  {
    this.gridApi=params.api;
    this.gridColumnApi=params.ColumnApi;
    let dataValue:any=[]//{First_name:"sahi",Last_name:"andl", Email:"sahi@gmail.com",City:"kdp",Address:"kadapa"}];
    //this.rowData=dataValue;
    params.api.setRowData(dataValue);
    
  }
 readData()
{
  let person :any ={};
person["first_name"] = (document.getElementById("txt_first") as HTMLInputElement).value;
person["last_name"] = (document.getElementById("txt_last") as HTMLInputElement).value;
person["email"]= (document.getElementById("txt_email")as HTMLInputElement).value;
person["city"] = (document.getElementById("txt_city")as HTMLInputElement).value;
person["address"] = (document.getElementById("txt_Address")as HTMLInputElement).value;
return person;
}
@ViewChild('agGrid') agGrid:any;
details(params:any)
{
 let data=this.readData();
 //params.api.setRowData(data);
 this.agGrid.api.updateRowData({
  add: [data]
     });
     this.reset();
}
public preventDefault(event: Event): void {
  event.preventDefault();
}
reset(){
  (document.getElementById("txt_first")as HTMLInputElement).value="";
  (document.getElementById("txt_last")as HTMLInputElement).value= "";
  (document.getElementById("txt_email") as HTMLInputElement).value="";
  (document.getElementById("txt_city") as HTMLInputElement).value="";
  (document.getElementById("txt_Address") as HTMLInputElement).value="";

}
onCellClicked(params:any) {
  if (params.column.colId === "action" && params.event.target.dataset.action) {
    let action = params.event.target.dataset.action;

    if (action === "edit") {
      params.api.startEditingCell({
        rowIndex: params.node.rowIndex,
        colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
      });
    }

    if (action === "delete") {
      params.api.applyTransaction({
        remove: [params.node.data]
      });
    }

    if (action === "update") {
      params.api.stopEditing(false);
    }

    if (action === "cancel") {
      params.api.stopEditing(true);
    }
  }
}

onRowEditingStarted(params:any) {
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}
onRowEditingStopped(params:any) {
  params.api.refreshCells({
    columns: ["action"],
    rowNodes: [params.node],
    force: true
  });
}
}
