import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-join-home',
  template: `
  <html>
  <body>
  <div class="container">
    <img src="assets/images/photo3.jpg" style="width:100%"/>
    <div class="text-block">
  <form>
  <h3 style="margin-left:5px;">Enter the details:</h3>
  <br>
  <div class="input-group form-group">
  <input type="text" class="form-control"  style="margin-left:5px; width:100px height:33px" #idNo  (keyup.enter)="update(idNo.value)"(keyup)="update(idNo.value)" 
   name="JoinSessionId" placeholder="Session ID"  />
   <br>
   <br>
   <br>
  <input type="text" #name class="form-control" id="txtName" style="margin-left:5px; height: 33px;"  
  placeholder="Enter your Name" (keyup)="updateName(name.value)"
  (keyup.enter)="updateName(name.value)" title="The name other players will see for you" required /> 
  <br>
  <br>
  <br>
  <button type="button" [disabled]="idNo.value.length<2 || name.value.length<2 " (click)="setName(name.value);" [routerLink]="['/pointing',{id,Name}]" 
  title="Join the session as a regular player" class="btn btn-primary" style=" margin-left:50px; bottom:10px">Join Session</button>
  <br>
  </div>
  &nbsp;
  </form>
  </div>
  </div>
  </body>
  </html>
  
  `,
  styleUrls: ['./join.css' ]
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
