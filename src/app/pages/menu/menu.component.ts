import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TableComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
