import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';
import tableData from 'src/fake-data/default-data.json';

interface User {
  id: number;
  email: string;
  fullName: string;
  numTel: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule],
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

  ngOnInit(): void {
    this.service.getUsersAdmin().subscribe(
      (users: any[]) => {
        this.recentUsers = users;
        console.log(this.recentUsers);
      },
      error => {
        console.error('Error fetching users:', error);
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
