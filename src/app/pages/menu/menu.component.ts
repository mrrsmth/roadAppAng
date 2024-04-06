import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TableComponent, CommonModule, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private authService: AuthService, private router: Router) {}
  auth: boolean = false
  isAuthenticated(): boolean {
    this.auth = this.authService.isAuthenticated();
    console.log(this.auth);
    return this.authService.isAuthenticated();
  }

  logout() {
    localStorage.removeItem('token');
      this.router.navigate(['/login']);
  }
}
