import { Component, OnInit } from '@angular/core';
//import { from } from 'rxjs';
import { Portfoliom3Service } from '../servicios/portfoliom3.service';


@Component({
  selector: 'app-nombreyfoto',
  templateUrl: './nombreyfoto.component.html',
  styleUrls: ['./nombreyfoto.component.scss']
})
export class NombreyfotoComponent implements OnInit {
  //variables
nombre: string = "";
apellido: string = "";

constructor (
  private portfoliom3Service : Portfoliom3Service
){}


ngOnInit():void{
  this.portfoliom3Service.getDatos().subscribe(data =>{
    console.log (data);
    //se define la info a mostrar
    this.nombre=data.nombre;
    this.apellido=data.apellido;
  });

  }

}

