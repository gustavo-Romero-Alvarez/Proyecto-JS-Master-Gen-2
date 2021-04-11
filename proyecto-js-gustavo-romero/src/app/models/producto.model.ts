export class Producto{

    title: string;
    imgUrl: string;
    id: number;
    cantidad: number;
    body:String;

    constructor(Pnombre: string, PImgUrl: string, pPrecio: number,pbody: string ){
        this.title =Pnombre;
        this.imgUrl =PImgUrl;
        this.id= pPrecio;
        this.cantidad=0;
        this.body=pbody;
    }
}