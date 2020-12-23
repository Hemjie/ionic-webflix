import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  constructor(private http: HttpClient ) { }

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=e640afc17bdef3719912f6e703bc1534&language=fr-FR&page=1').toPromise();
  }
  
}
