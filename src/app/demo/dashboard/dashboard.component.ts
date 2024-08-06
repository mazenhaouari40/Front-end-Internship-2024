import { Component } from '@angular/core';
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
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  recentUsers: User[] = [
    // Exemple d'initialisation des utilisateurs
    { id: 1, email: 'user1@example.com', fullName: 'John Doe', numTel: '123-456-7890' },
    { id: 2, email: 'user2@example.com', fullName: 'Jane Smith', numTel: '098-765-4321' }
    // Ajoutez d'autres utilisateurs ici
  ];

  trackByUser(index: number, user: User): number {
    return user.id;
  }
}
