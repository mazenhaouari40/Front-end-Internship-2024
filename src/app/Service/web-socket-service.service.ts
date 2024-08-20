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
    this.socket$ = new WebSocketSubject(this.socketurl);
  }

  getMessages(): Observable<any> {
    return this.socket$.asObservable();
  }
}

