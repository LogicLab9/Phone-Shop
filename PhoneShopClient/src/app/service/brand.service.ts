import { Injectable } from '@angular/core';
import {ApiConfig} from "../shared/ApiConfig";
import {HttpClient} from "@angular/common/http";
import {Brand} from "../entities/Brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  async getAll(): Promise<Brand[]> {
    const url = ApiConfig.createURL("brands")
    // @ts-ignore
    return this.http.get<Brand[]>(url).toPromise();

  }
}
