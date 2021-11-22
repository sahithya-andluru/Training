import { Injectable,OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { PointsComponent } from './points/points.component';
import {io,Socket} from 'socket.io-client';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
//import { ObserversModule } from '@angular/cdk/observers';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements OnInit{
  
  private IName:any;
  //private points:any;
  private socket:any;
  private points = new BehaviorSubject(null);
  sharedPoints = this.points.asObservable();

  nextMessage(message:any) {
    this.points.next(message);
  }
  constructor() { 
    
  }
  connect(pid:any,point:any,Name:any) {
    this.socket = io(environment.socketUrl);
    this.socket.emit('joinSession', { pid: pid,name:Name,point:point });
    //this.socket.emit('startSession', { pid: pid});
    //this.socket.name=this.IName;
    
  
  }
  public ngOnInit(){
    
  }
  startPoints(pid:any,points:any) {
    this.socket.emit('startPoints', {pid:pid, g: points });
  }
  startSession(pid:any) {
    this.socket.emit('startSession', {pid:pid});
  }
  showVotes(pid:any){
    this.socket.emit('showVotes', {pid:pid});
  }
  clearVotes(pid:any){
    this.socket.emit('clearVotes', {pid:pid});
  }
  recieveJoinedPlayers() {
    return new Observable((observer) => {
      this.socket.on('joinSession', (users:any) => {
        observer.next(users);
      });
    });
  }
  recieveStatistics(){
    return new Observable((observer) => {
      this.socket.on('statistics', (words:any) => {
        observer.next(words);
      });
    });
  }
 


  setName(name:string):void{
    this.IName=name;
  }
  setPoints(data:any){
    this.points.next(data);
  }
  getName(){
    return this.IName;
  }
  /*getPoints(){
    return this.points;

  }*/
  

 
}
