import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-join-home',
  template: `
  <form>
  <h3 style="margin-left:350px;">Enter the details:</h3>
  <br>
  <input type="text"  style="margin-left:350px; height:33px " #idNo  (keyup.enter)="update(idNo.value)"(blur)="update(idNo.value)" 
   name="JoinSessionId" placeholder="Session ID"  required/>
  <input type="text" #name  id="txtName" style="margin-left:5px; height: 33px;"  
  placeholder="Enter your Name" (keyup.enter)="updateName(name.value)"
  (blur)="updateName(name.value)" title="The name other players will see for you" required /> 
  
  <button [disabled]="idNo.value.length<2" (click)="setName(name.value);" [routerLink]="['/pointing',{id,Name}]" 
  title="Join the session as a regular player" class="btn btn-primary" style=" margin-left:5px;">Join Session</button>
  </form>
  
  `,
  styles: [
  ]
})
export class JoinHomeComponent implements OnInit {

  id = '';
  Name='';
  rowData:any;
  constructor(private _dataServiceService:DataServiceService) { }

  update(value: string) 
  { 
    this.id = value; 
  }
  updateName(value: string) 
  { 
    this.Name = value; 
  }
  ngOnInit(): void {
  }
  setName(name:string){
    this._dataServiceService.setName(name);

  }
 /* setPoints(){
    this._dataServiceService.setPoints(this._dataServiceService.sharedPoints.subscribe(data => this.rowData = data));
  }*/

}

