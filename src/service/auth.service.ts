import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private htpp: HttpClient) { }

  EnviarEmail(body:any){
    return this.htpp.post(`${environment.api}`,body)
  }
}
