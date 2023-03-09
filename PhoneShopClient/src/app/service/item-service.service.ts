import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/ApiConfig";
import {Item} from "../entities/Item";


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) {
  }

  async getAll(): Promise<Item[]> {
    const url = ApiConfig.createURL("items")
    // @ts-ignore
    return this.http.get<Item[]>(url).toPromise();

  }
}
