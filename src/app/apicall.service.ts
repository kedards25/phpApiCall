import { Injectable } from '@angular/core';
import { Data } from './testModel';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http: HttpClient) { }

  getDetails(): Observable<Data[]> {
    const apiURL = 'http://localhost/testFile.php';
    return this.http.get<Data[]>(apiURL);

  }
}
