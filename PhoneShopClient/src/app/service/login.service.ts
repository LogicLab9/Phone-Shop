import { Injectable } from '@angular/core';
import {Login} from "../entities/Login";
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/ApiConfig";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async signIn(login: Login):Promise<Login> {
    const url = ApiConfig.createURL("users/login")
    // @ts-ignore
    return this.http.post<Login>(url, login).toPromise();
  }
}
