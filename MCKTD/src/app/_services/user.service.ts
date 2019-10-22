import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  add(id: number) {
    throw new Error('Method not implemented.');
  }
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }

    register(user) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}

