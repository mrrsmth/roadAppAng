import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})


export class TableComponent {
  roadmaps!: any[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:8082/roadmaps')
      .subscribe(data => {
        this.roadmaps = data;
      });
  }
}
