import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PeticionesService {
  public URL: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.request('GET', this.URL, { responseType: 'json' })
  }
}
