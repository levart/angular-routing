import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  get isAuthenticated(): boolean {
    const isAuth = localStorage.getItem('isAuthenticated')
    return !!isAuth
  }

  get user(): any {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }

  constructor() {
  }

  login() {
    const user = {
      name: 'John',
      role: 'Guest'
    }
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('isAuthenticated', String(true))
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
  }
}
