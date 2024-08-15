import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';
import { Spinkit } from 'src/app/theme/shared/components/spinner/spinkits' ;
import { SharedModule } from 'src/app/theme/shared/shared.module';

interface User {
  id: number;
  email: string;
  fullName: string;
  numTel: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule,SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers : [ServiceService,HttpClient]
})

export class DashboardComponent implements OnInit {
  recentUsers: any[] = []; 

  constructor(
    private service : ServiceService,
    private toastr : ToastrService
  ){}


  isLoading = false;
  Spinkit = Spinkit;

  ngOnInit(): void {

    this.isLoading = true; 

    this.service.getUsersAdmin().subscribe(
      (users: any[]) => {
        this.recentUsers = users;
        this.isLoading = false; 

      },
      error => {
        console.error('Error fetching users:', error);
        this.isLoading = false;

      }
    );


    
  }


  delete(id: number): void {
    const userData = localStorage.getItem('user');
    let user = JSON.parse(userData);
    if (user.id == id){
      this.toastr.error("You can't delete the current user.");
    }else{
    this.service.deleteUser(id)
    .subscribe(
        response => {
            window.location.reload();
          });      
        
        }

      }

}
