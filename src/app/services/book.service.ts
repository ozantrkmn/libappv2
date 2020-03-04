import { Injectable } from '@angular/core';
import { book } from "../book/book";
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }  
  
  getBooks(): Observable<book> {
    return this.http.get<book>(this.apiURL + '/books/').pipe(retry(1))
  }

  getBook(id): Observable<book> {
    return this.http.get<book>(this.apiURL + '/books/' + id)
    .pipe(
    retry(1)
    )
    }  

  deleteBook(id){
    return this.http.delete<book>(this.apiURL + '/books/' + id, this.httpOptions)
    .pipe(
    retry(1)
    )
    }

      addBook(book): Observable<book> {
        return this.http.post<book>(this.apiURL + '/books/', JSON.stringify(book), this.httpOptions)
        .pipe(
          retry(1)
        )
      }  

      updateBook(id, book): Observable<book> {
        return this.http.put<book>(this.apiURL + '/books/' + id, JSON.stringify(book), this.httpOptions)
        .pipe(
        retry(1)
        )
        }

      
}
