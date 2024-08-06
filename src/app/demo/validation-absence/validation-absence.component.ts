import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-validation-absence',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './validation-absence.component.html',
  styleUrl: './validation-absence.component.scss'
})
export class ValidationAbsenceComponent {
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
