import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Brand} from "../entities/Brand";
import {ApiConfig} from "../shared/ApiConfig";
import {SubCategory} from "../entities/subCategory";

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }
  async getAll(): Promise<SubCategory[]> {
    const url = ApiConfig.createURL("subcategories")
    // @ts-ignore
    return this.http.get<SubCategory[]>(url).toPromise();

  }
}
