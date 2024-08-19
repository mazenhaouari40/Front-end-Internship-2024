import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { global_var } from 'src/environments/global';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;
  private socketurl = global_var.socketapi ; 
  constructor() {
    console.log('wss://'+this.socketurl +'/ws/notifications')
    this.socket$ = new WebSocketSubject('wss://'+this.socketurl +'/ws/notifications');
    // this.socket$ = new WebSocketSubject('ws://'+this.socketurl +'/ws/notifications');

  }

  getMessages(): Observable<any> {
    return this.socket$.asObservable();
  }
}

