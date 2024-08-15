import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Spinkit } from 'src/app/theme/shared/components/spinner/spinkits' ;

@Component({
  selector: 'app-liste-absence',
  standalone: true,
  imports: [[SharedModule],[HttpClientModule]],
  templateUrl: './liste-absence.component.html',
  styleUrl: './liste-absence.component.scss',
  providers : [[ServiceService],[HttpClient]]
})
export class ListeAbsenceComponent implements OnInit {

  constructor(private http: HttpClient,private service: ServiceService) { }
  cards: any[] = [];

  isLoading = false;
  Spinkit = Spinkit;

  ngOnInit(): void {
    this.isLoading = true; 

    const userData = localStorage.getItem('user');
    let user = JSON.parse(userData);
    this.service.getAbsence(user.id).subscribe(
      (response) => {
        this.cards = response;

        this.isLoading = false; 
      },
      (error) => {
        console.error('Error fetching data', error);
        
        this.isLoading = false;

      }
    );
  }






}
