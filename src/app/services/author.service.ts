import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { author } from '../author/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }  
  
  getAuthors(): Observable<author> {
    return this.http.get<author>(this.apiURL + '/authors/').pipe(retry(1))
  }

  addAuthor(author): Observable<author> {
    return this.http.post<author>(this.apiURL + '/authors/', JSON.stringify(author), this.httpOptions)
    .pipe(
      retry(1)
    )
  }
  
  deleteAuthor(id){
    return this.http.delete<author>(this.apiURL + '/authors/' + id, this.httpOptions)
    .pipe(
    retry(1)
    )
    }

}
