import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/api/public'; // указываем базовый URL API

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, password: string) {
    const url = `${this.apiUrl}/signup`; // указываем конечный URL для регистрации
    const body = { name, email, password }; // создаем объект данных для отправки

    return this.http.post(url, body).pipe(
      tap(response => {
        console.log('Ответ сервера:', response); // просто выводим ответ сервера в консоль
      })
    );
  }
}
