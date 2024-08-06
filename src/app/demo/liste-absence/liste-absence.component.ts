import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-liste-absence',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './liste-absence.component.html',
  styleUrl: './liste-absence.component.scss'
})
export class ListeAbsenceComponent {
 cards = [
    {
      type: 'Grippe',
      debut: '2024-08-01',
      fin: '2024-08-05',
      status: 'Demande'
    },
    {
      type: 'Covid-19',
      debut: '2024-08-10',
      fin: '2024-08-20',
      status: 'Approuvé'
    },
    {
      type: 'Rhume',
      debut: '2024-09-01',
      fin: '2024-09-03',
      status: 'Refusé'
    }
    // Ajoutez d'autres cartes si nécessaire
  ];
}
