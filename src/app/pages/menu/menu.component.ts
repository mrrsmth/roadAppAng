import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TableComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private authService: AuthService) {}
  auth: boolean = false
  isAuthenticated(): boolean {
    // this.auth = this.authService.isAuthenticated();
    // console.log(this.auth);
    return this.authService.isAuthenticated();
  }
}
