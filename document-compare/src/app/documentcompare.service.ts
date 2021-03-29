import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentcompareService {

  constructor(private http: HttpClient) { }

  textUrl : string ='http://localhost:8081/api/v1/getString';

  method():Observable<any>
  {
    return this.http.get<any>(this.textUrl)
  }
}
