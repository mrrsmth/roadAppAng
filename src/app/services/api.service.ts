import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8081/api/public';

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, password: string) {
    const url = `${this.apiUrl}/signup`;
    const body = { name, email, password };

    return this.http.post(url, body).pipe(
      tap(response => {
        console.log('Ответ сервера:', response);
      })
    );
  }

  login(email: string, password: string) {
    const url = `${this.apiUrl}/login`;
    const body = { email, password };

    return this.http.post(url, body).pipe(
      tap((response: any) => {
        console.log('Ответ сервера:', response);
        // Здесь можно добавить код для обработки ответа от сервера, например, сохранение токена аутентификации
        const token = response.Token;
        const refreshToken = response.RefreshToken;
        // Далее можно сохранить токен и refreshToken в localStorage или в другое место для дальнейшего использования
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
      })
    );
  }
}
