import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ParamMap } from '@angular/router';
import { DataServiceService } from '../data-service.service';
//import { MatSnackBar } from '@angular/material/snack-bar';

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
  show=true;
  Name:any;
  points:any;
  names:any;
  words=[
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
  users:any;
  constructor(private _dataService:DataServiceService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(){
    
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id=params.get('id');
      this.pid=id;
      this.Name=params.get('Name');
      this.name=this._dataService.getName();
    //this._dataService.getPoints().subscribe(valu=>this.rowD.push(valu));
    this._dataService.sharedPoints.subscribe(data => this.rowData = data);
    //this.rowD=this._dataService.getPoints();
    this._dataService.connect(this.pid,this.points,this.Name);
    //this.rowData=this.rowD;
    this.recieveJoinedPlayers();
    //this.recieveStartSession();
  
    
    })
  
  }
  recieveJoinedPlayers() {
    this._dataService.recieveJoinedPlayers().subscribe((users:any) => {
      console.log(users);
      this.users=users;
    });
  }
  /*recieveStartSession() {
    this._dataService.startSession(this.pid);
    this._dataService.recieveStartSession().subscribe((words) => {
      this.words = words;
    });
  }*/
  
  dispalyPoints(point:any){
     this.points=point;
     this._dataService.startPoints(this.pid,this.points);
  }
  showVotes(){
    //this.show=false;
    this._dataService.showVotes(this.pid);
  }
  clearVotes(){
    this._dataService.clearVotes(this.pid);
  }


}
