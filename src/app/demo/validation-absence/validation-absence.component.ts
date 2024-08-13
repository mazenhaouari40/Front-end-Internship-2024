import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-validation-absence',
  standalone: true,
  imports: [SharedModule,HttpClientModule],
  templateUrl: './validation-absence.component.html',
  styleUrl: './validation-absence.component.scss',
  providers : [ServiceService,HttpClient]
})
export class ValidationAbsenceComponent implements OnInit{

  constructor(
private service : ServiceService

  ){  }
  absences: any[] = []; 

ngOnInit(): void {
  const userData = localStorage.getItem('user');
  let user = JSON.parse(userData);
  
  this.service.getabsencebymanager(user.id).subscribe(
  (response) => {
      this.absences = response;
  });
}


  cards = [
    {
      user: 'Mazen Haouari ',
      debut: '2024-08-01',
      fin: '2024-08-05',
      status: 'Demande'
    },
    // {
    //   imageUrl: 'path/to/image2.jpg',
    //   debut: '2024-08-10',
    //   fin: '2024-08-20',
    //   status: 'Approuvé'
    // },
    // {
    //   imageUrl: 'path/to/image3.jpg',
    //   debut: '2024-09-01',
    //   fin: '2024-09-03',
    //   status: 'Refusé'
    // }
    // Ajoutez d'autres cartes si nécessaire
  ];
}
