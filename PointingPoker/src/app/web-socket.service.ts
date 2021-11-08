import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable,Subject } from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket:any;
  constructor() { }
  connect(): Rx.Subject<MessageEvent> {
     let url=environment.ws_url;
    this.socket = io(environment.ws_url);
    //this.socket = io('http://localhost:5000');

    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    let observable = new Observable(observer => {
        this.socket.on('message', (data: any) => {
            console.log("Received message from Websocket Server");
            observer.next(data);
          })
        return () => {
          this.socket.disconnect();
        }
    });
    let observer = {
      next: (data: Object) => {
          this.socket.emit('message', JSON.stringify(data));
      },
  };

  // we return our Rx.Subject which is a combination
  // of both an observer and observable.
  return Rx.Subject.create(observer, observable);
}
}

