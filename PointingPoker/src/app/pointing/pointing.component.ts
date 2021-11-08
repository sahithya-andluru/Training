import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-pointing',
  templateUrl: './pointing.component.html',
  styleUrls: ['./pointing.component.css']
})
export class PointingComponent implements OnInit {
  rowD:any=[];
  rowData:any=[];
  public pid:any;
  name:any;
  points:any;
  constructor(private _dataService:DataServiceService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id=params.get('id');
      this.pid=id;
    this.name=this._dataService.getName();
    this._dataService.getPoints().subscribe(valu=>this.rowD.push(valu));

    })
    this.rowData=this.rowD;
  }
  
  dispalyPoints(point:number){
     this.points=point;
  }


}
