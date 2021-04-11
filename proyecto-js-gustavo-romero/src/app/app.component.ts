import { Component, ViewEncapsulation } from '@angular/core';
import { Poke } from './interface/poke';
import { Producto } from './models/producto.model'
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent {
 
 arrComida: Poke[];
 arrBebida: Producto[];
 productosSeleccionados: Producto[];
 urlImagen: string;
 
constructor(private apiService :ApiService){
  this.productosSeleccionados=[];
}
ngOnInit() {
  this.apiService.getall()
  .then(post=> this.arrComida=post)
  .catch(error=> console.log(error));

 this.apiService.getall()
  .then(post=> this.arrBebida=post.filter(value => value.id %2==0))
  .catch(error=> console.log(error));

  //desestructuracion
  

  this.apiService.getall()
  .then(post=> alert(this.desestructurar1(post)))
  .catch(error=> console.log(error));

  
  this.apiService.getall()
  .then(post=> console.log(post))
  .catch(error=> console.log(error));

  //probar si funciona
  setTimeout(() => {
    let products =localStorage.getItem('productos');
    if(products.length!=0){
      console.log('hay productos');
       this.productosSeleccionados =JSON.parse(products);
    }        
     });    
     setTimeout(() => {
      alert('Bienvenido')
          
       });
}

desestructurar1 = (trabajador) => {
  const [{
      title: titulo
     
  }] = trabajador;
  return `El primer titulo es : ${titulo} `;
};


onProductoSeleccionado($event){

  const productoEncontado= this.productosSeleccionados.find(producto=> producto.title=== $event.title);
  //this.productosSeleccionados.push($event);
  if(productoEncontado){
    productoEncontado.cantidad++;
  }
  else{
    $event.cantidad=1;
    this.productosSeleccionados.push($event);
    console.log(this.productosSeleccionados);
  }
}

map1(){
  
 console.log( this.apiService.getall()
  .then(post=> post.map(guardarid => guardarid.id))
  .catch(error=> console.log(error)));
 
}

map2(){
  
  console.log( this.apiService.getall()
   .then(post=> post.map(guardartitle => guardartitle.title))
   .catch(error=> console.log(error)));
  
 }
 
 
map3(){
  
  console.log( this.apiService.getall()
   .then(post=> post.map(guardarbody => guardarbody.body))
   .catch(error=> console.log(error)));
  
 }

 find1(){
  console.log( this.apiService.getall()
   .then(post=> post.find(buscarid => buscarid.id==1))
   .catch(error=> console.log(error)));
  
 }






}
