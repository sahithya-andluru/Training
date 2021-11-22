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
  
  Name:any;
  public id:number=Math.trunc(Math.random()*(10000));
  
  constructor( private _dataServiceService:DataServiceService) { 
    
  } 
  setName(name:string){
    this._dataServiceService.setName(name);

  }
  update(value: string) 
  { 
    this.Name = value; 
  }
  /*setPoints(){
    this._dataServiceService.setPoints(this.rowData);
  }*/
  

  ngOnInit(): void {
  }

}
