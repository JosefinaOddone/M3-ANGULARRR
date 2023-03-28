import { Component, OnInit } from '@angular/core';
import { Portfoliom3Service } from '../servicios/portfoliom3.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
 educacion1: any=[];
 educacion2: any=[];
 educacion3: any=[];
 educacion4: any=[];
 educacion5: any=[];

  constructor(
    private portfoliom3Service: Portfoliom3Service
  ){}

  ngOnInit(): void {
    this.portfoliom3Service.getDatos().subscribe (data => {
      //console.log (data);
      this.educacion1=data.educacion1;
      this.educacion2=data.educacion2;
      this.educacion3=data.educacion3;
      this.educacion4=data.educacion4;
      this.educacion5=data.educacion5;
    }
      )
  }





}
