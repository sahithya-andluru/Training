import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { PointsComponent } from './points/points.component';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private IName:any;
  private points:any;
  private obsof:any;


  setName(name:string):void{
    this.IName=name;
  }
  setPoints(data:any){
    this.points=data;
  }
  getName(){
    return this.IName;
  }
  getPoints(){
    return from(this.points);

  }

  constructor() { }
}
