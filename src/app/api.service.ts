import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCats(id: number) {
    return this.http.get(`https://freetestapi.com/api/v1/cats/${id}`);
  }

  private apiUrl = 'https://api.thecatapi.com/v1/images/search';
  getRandCat(): Observable<string> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response[0]?.url)
    );
  }

  private apiUrlImg = 'https://api.api-ninjas.com/v1/cats';
  private apiKey = 'PyE5JIkfhIv5kPuLRvIgHoneLcPiF4g1hqlxwhw5';
  // private apiKey = 'A0i1mSwmCi7B7dblBG2/0Q==RSHrCJaSB5SNOP1B';
  getImgCats(name: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });
    return this.http.get(`${this.apiUrlImg}?name=${name}`, { headers });
  }
}
