import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-join-home',
  template: `
  <h3 style="margin-left:350px;">Name:</h3>
  <input type="text" #name class="span2 toolTipDefault" style="margin-left:350px; height:33px" id="txtName"  title="The name other players will see for you"> 
  <input type="text" #idNo (keyup.enter)="update(idNo.value)"
  (blur)="update(idNo.value)" class="span1" style="margin-left:5px; height: 33px;" name="JoinSessionId" placeholder="Session ID" />
  <button (click)="setName(name.value);setPoints()" [routerLink]="['/points',value]" title="Join the session as a regular player" class="btn btn-primary" style=" margin-left:5px;">Join Session</button>
  `,
  styles: [
  ]
})
export class JoinHomeComponent implements OnInit {

  value = '';
  constructor(private _dataServiceService:DataServiceService) { }

  update(value: string) 
  { 
    this.value = value; 
  }
  ngOnInit(): void {
  }
  setName(name:string){
    this._dataServiceService.setName(name);

  }
  setPoints(){
    this._dataServiceService.setPoints(this._dataServiceService.getPoints);
  }

}
