import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from './Service/web-socket-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hr Maps';

  constructor(private webSocketService: WebSocketService, private router: Router,
    private toastr : ToastrService

  ) {}

  ngOnInit() {
    this.webSocketService.getMessages().subscribe(message => {
      const userData = localStorage.getItem('user');
      let user = JSON.parse(userData);
      if (message.email === user.email) {
      this.toastr.warning("this user is deleted from admin")
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        // Navigate to the login page
        this.router.navigate(['/login']);
      }, 1500);
      
    }
    });
  }

}