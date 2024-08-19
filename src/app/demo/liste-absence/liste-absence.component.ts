import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Spinkit } from 'src/app/theme/shared/components/spinner/spinkits' ;
import { RouterModule } from '@angular/router';
import { WebSocketService } from 'src/app/Service/web-socket-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liste-absence',
  standalone: true,
  imports: [[SharedModule],[HttpClientModule],[RouterModule]],
  templateUrl: './liste-absence.component.html',
  styleUrl: './liste-absence.component.scss',
  providers : [[ServiceService],[HttpClient]]
})
export class ListeAbsenceComponent implements OnInit {

  constructor(private http: HttpClient,
    private service: ServiceService,
    private webSocketService: WebSocketService,
    private toastr : ToastrService
  ) { }
  cards: any[] = [];

  isLoading = false;
  Spinkit = Spinkit;

  getdata() : void{
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

    this.webSocketService.getMessages().subscribe(message => {
      const exists = this.cards.some(card => card.id_absence === Number(message.idabsence));
      if (exists) {
        this.toastr.warning("The manager has updated your status.");
        this.getdata();

    }
    });


  }






}
