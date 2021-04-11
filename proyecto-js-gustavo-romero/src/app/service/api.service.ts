import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Poke } from '../interface/poke';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

    Fetchpoke= (): Observable<Poke[]> =>{
      return this.http.get<Poke[]>(`${environment.BaseUrl}`)
    }

    getall():Promise<any[]>{
       return this.http.get<any[]>(`${environment.BaseUrl}`).toPromise();
    }
    
    
   
}
