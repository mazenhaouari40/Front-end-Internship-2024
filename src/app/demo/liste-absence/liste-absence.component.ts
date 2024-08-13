import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

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


  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    let user = JSON.parse(userData);
    
    this.service.getAbsence(user.id).subscribe(
      (response) => {
        this.cards = response;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

//  cards = [
//     {
//       type: 'Grippe',
//       debut: '2024-08-01',
//       fin: '2024-08-05',
//       status: 'Demande'
//     },
//     {
//       type: 'Covid-19',
//       debut: '2024-08-10',
//       fin: '2024-08-20',
//       status: 'Approuvé'
//     },
//     {
//       type: 'Rhume',
//       debut: '2024-09-01',
//       fin: '2024-09-03',
//       status: 'Refusé'
//     }
//     // Ajoutez d'autres cartes si nécessaire
//   ];





}
