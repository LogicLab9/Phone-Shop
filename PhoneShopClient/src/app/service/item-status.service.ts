import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/ApiConfig";
import {StatusItem} from "../entities/statusItem";

@Injectable({
  providedIn: 'root'
})
export class ItemStatusService {

  constructor(private http: HttpClient) { }
  async getAll(): Promise<StatusItem[]> {
    const url = ApiConfig.createURL("statuses")
    // @ts-ignore
    return this.http.get<StatusItem[]>(url).toPromise();

  }}
