import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { breedInterface } from '../interfaces/breed.interface';
import { resultInterface } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private apiKey = "live_poxda3DMgmZo9u6r5ZBTeaNd7ZrLmqiajGCVfqTC4CtvVXGFZlphqXWBuok9OBbe";
  mainLink = "https://api.thecatapi.com/v1/";

  private header: HttpHeaders = new HttpHeaders({
    'x-api-key': this.apiKey
  })

  constructor(private http: HttpClient) { }

  getBreeds(){
    return this.http.get<breedInterface[]>(`${this.mainLink}breeds`)
  }

  getResults(amount: string, id: string){
    return this.http.get<resultInterface[]>(`${this.mainLink}images/search?limit=${amount}${id ? "&breed_ids=" + id : ''}`, {headers: this.header})
  }
}
