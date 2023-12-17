import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = '6604472052964e2ab8e33a3c1d303c83';

  login(apiKey: string): void {
    localStorage.setItem(this.apiKey, apiKey);
  }

  logout(): void {
    localStorage.removeItem(this.apiKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.apiKey);
  }

  getApiKey(): string | null {
    return localStorage.getItem(this.apiKey);
  }

}
