export class Producto{
    idProducto : number = 0;
    nombreProducto : string = '';
    descripcionProducto : string = '';
    existencia : number = 0;
    precioProducto : number = 0;
    idCategoria : CategoriaO = new CategoriaO();
    fechaCreacion : Date = new Date();
}

export class CategoriaO {
    idCategoria : number = 0;
}