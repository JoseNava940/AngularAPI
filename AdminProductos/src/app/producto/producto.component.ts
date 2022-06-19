import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from '../modelo/producto';
import { Categoria, CategoriaUpdate } from 'src/app/modelo/categoria';
import { CategoriaService } from '../servicios/categoria.service';
import { ProductosService } from '../servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  titulo: string = 'Listado de Productos';
  listaDeCategorias: Categoria[] = [];
  idCategoria: number = 0;
  selectCategoria: Categoria = new Categoria();
  producto: Producto = new Producto();

  constructor(
    private servicio: ProductosService,
    private servicioC: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioC.getCategorias().subscribe((Categorias) => this.listaDeCategorias = Categorias)
  }

  almacenarProducto(producto: Producto): void {
    for (let i = 0; i < this.listaDeCategorias.length; i++) {
      if (this.listaDeCategorias[i].idCategoria = this.idCategoria) {
        this.selectCategoria = this.listaDeCategorias[i];
        break;
      }
    }
    this.producto.idCategoria = this.selectCategoria;
    this.servicio.crearProducto(producto).subscribe(result => {
      Swal.fire(
        'Administración de Productos',
        'El producto se almacenó',
        'success')
      this.router.navigate(["/listadoProductos"]);
    }
  );
  
  }
}
