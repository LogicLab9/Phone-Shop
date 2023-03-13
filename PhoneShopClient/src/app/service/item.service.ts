import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../entities/Item";
import {ApiConfig} from "../shared/ApiConfig";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  async getAll(): Promise<Item[]> {
    const url = ApiConfig.createURL("items")
    // @ts-ignore
    return this.http.get<Item[]>(url).toPromise();

  }

  async searchAll(searchText: string) :Promise<Item>{
      const url = ApiConfig.createURL("items?" + searchText)
      // @ts-ignore
      return this.http.get<Item[]>(url).toPromise();

  }
}
