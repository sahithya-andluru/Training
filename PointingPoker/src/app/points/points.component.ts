import { Component, OnInit,ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { DataServiceService } from '../data-service.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  public columnDefs:any;
  public gridApi:any;
  public defaultColDef:any;
  public gridColumnApi:any;
  public sortingOrder:any;
  public rowData:any;
  Name:any;
  public id:number=Math.trunc(Math.random()*(10000));
  actionCellRenderer(params:any) {
    let eGui = document.createElement("div");
    eGui.innerHTML='<button  data-action="delete" > delete </button>';
    return eGui;
  }
  constructor( private _dataServiceService:DataServiceService) { 
    this.columnDefs=[
      {headerName:"Label",
       field:"label",
       width:100,

      },
      {headerName:"Value",
       field:"value",
       width:100,
       sortable:true,
      },
      {
        width: 150,
        cellRenderer: this.actionCellRenderer,
        editable: false,
        colId: "action"
      }
    ];
    this.defaultColDef = {
      editable: true
    };
    this.rowData=[
      {label:'0 points',value:'0'},
      {label:'0.5 points',value:'0.5'},
      {label:'1 points',value:'1'},
      {label:'2 points',value:'2'},
      {label:'3 points',value:'3'},
      {label:'5 points',value:'5'},
      {label:'8 points',value:'8'},
      {label:'13 points',value:'13'},
      {label:'20 points',value:'20'},
      {label:'40 points',value:'40'},
      {label:'100 points',value:'100'},
      {label:'?',value:'?'}
    ]
  }
  @ViewChild('agGrid') agGrid:any;
  onGridReady(params:any)
  {
    this.gridApi=params.api;
    this.gridColumnApi=params.ColumnApi;
    params.api.setRowData(this.rowData);
    
  }
  onAddRow()
   {
     this.agGrid.api.updateRowData({
  add: [{ label: '', value: '' }]
 
     });
     this.rowData.push({label:'',value:''});
     this.gridApi.setRowData(this.rowData);
     
  
   }
   onCellClicked(params:any) {
    if (params.column.colId === "action" ) {
        params.api.updateRowData({
          remove: [params.node.data]
        });
        this.rowData.splice(params.rowIndex, 1)
        this.gridApi.setRowData(this.rowData);
        
    } 
  } 
  setName(name:string){
    this._dataServiceService.setName(name);

  }
  update(value: string) 
  { 
    this.Name = value; 
  }
  setPoints(){
    this._dataServiceService.setPoints(this.rowData);
  }
  

  ngOnInit(): void {
  }

}
