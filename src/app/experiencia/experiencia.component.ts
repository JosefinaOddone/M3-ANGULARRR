import { Component, OnInit } from '@angular/core';
import { Portfoliom3Service } from '../servicios/portfoliom3.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  experiencia1: any=[];
  experiencia2: any=[];
  experiencia3: any=[];
  experiencia4: any=[];

constructor (
  private portfoliom3Service : Portfoliom3Service
){}

ngOnInit(): void {
  this.portfoliom3Service.getDatos().subscribe (data => {
    //console.log (data);
    this.experiencia1=data.experiencia1;
    this.experiencia2=data.experiencia2;
    this.experiencia3=data.experiencia3;
    this.experiencia4=data.experiencia4;
    
  }
    )
}

}
