import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private httpClient:HttpClient) { }

  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>('/assets/userList.json');
  }
}
