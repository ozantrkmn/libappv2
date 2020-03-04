import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { publisher } from '../publisher/publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }  
  
  getPublishers(): Observable<publisher> {
    return this.http.get<publisher>(this.apiURL + '/publishers/').pipe(retry(1))
  }

  deletePublisher(id){
    return this.http.delete<publisher>(this.apiURL + '/publishers/' + id, this.httpOptions)
    .pipe(
    retry(1)
    )
    }


    addPublisher(publisher): Observable<publisher> {
      return this.http.post<publisher>(this.apiURL + '/publishers/', JSON.stringify(publisher), this.httpOptions)
      .pipe(
        retry(1)
      )
    }  
}
