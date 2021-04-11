import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    if(!isNaN(arg) &&  arg.length != 0){
      console.log('es un numero')

      if (arg === '' || arg.length < 1) return value;
   
      return  value.filter(value => 
     
       value.id==arg
       
       );
    }
    else
    {
      console.log('no es un numero')

      if (arg === '' || arg.length < 1) return value;
   
      return  value.filter(value => 
     
       value.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 
       
       );
   }
    }
    
   


}
