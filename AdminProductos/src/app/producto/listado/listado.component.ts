import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelo/categoria';
import { Producto } from 'src/app/modelo/producto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductosService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent2 implements OnInit {

  titulo: string = 'Listado de productos';
  listaProductos: Producto[] = [];
  listaDeCategorias: Categoria[] = [];
  idCategoria: number = 0;
  producto: Producto = new Producto();
  numero: number = 0;
  idProducto: number = 0;
  constructor(
    private servicio: ProductosService,
    private servicio2: CategoriaService
    ) { }

  ngOnInit(): void {
    this.servicio.listadoProductos().subscribe((productos) => this.listaProductos = productos);
    this.servicio2.listadoCategorias().subscribe((categoria) => this.listaDeCategorias = categoria);
  }

  actualizar(producto: Producto): void {
    console.log(producto)
    console.log(this.idProducto)
    this.servicio.actualizarProducto(producto, this.idProducto).subscribe(
      () => {
        Swal.fire(
          'Producto Actualizado',
          'El producto se actualizó satisfactoriamente',
          'success'
        ).then(
          (result) =>{
            window.location.reload();
          }
        );
      }
    )
  }

  AsignarId(id: number): void {
    this.idProducto = id;
  }

  eliminar(producto: Producto): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el producto ${producto.nombreProducto}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarProducto(producto.idProducto).subscribe(
          () => {
            this.listaProductos = this.listaProductos.filter(c => c !== producto)
            Swal.fire(
              'Eliminado!',
              `El producto ${producto.nombreProducto} ha sido eliminado con éxito.`,
              'success'
            )
          }
        );
      }
    })
  }
}
