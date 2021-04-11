import { Component,Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Input() arrProductos2: Producto[];
  comboBox:number[];
  comboBoxName:String[];
  comboBoxBody:String[];
  respuesta:boolean;
  busquedapro: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  filterPost= 0;
  map1(){
    this.comboBox=this.arrProductos2.map(guardarid => guardarid.id)
    
   }

   map2(){  
    this.comboBoxName=this.arrProductos2.map(guardartitle => guardartitle.title)      
   }
   map3(){
    this.comboBoxBody=this.arrProductos2.map(guardarbody => guardarbody.body)
   }

   find1(){
     if(this.arrProductos2.find(buscarid => buscarid.id==this.filterPost)){
       alert('producto encontrado')
     }
     else{
       alert('producto no encontrado')
     } 
   }



 
}
