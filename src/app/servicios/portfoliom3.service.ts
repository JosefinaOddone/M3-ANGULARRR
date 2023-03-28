import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //esto es para suscribir y q se reciba respuesta de forma asincronica
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Portfoliom3Service {

  constructor(private http:HttpClient) { }

getDatos(): Observable<any>{
  return this.http.get("./assets/Json/portfolio.json");
}

}
