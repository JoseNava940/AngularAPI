import { Component, OnInit } from '@angular/core';
import { Categoria, CategoriaUpdate } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo: string = 'Listado de categorías';
  listaDeCategorias: Categoria[] = [];
  categoria: Categoria = new Categoria();
  numero: number = 0;
  idCategoriaCategoria: number = 0;
  categoriaupdate: CategoriaUpdate = new CategoriaUpdate();
  constructor(private servicio: CategoriaService) { }

  ngOnInit(): void {
    this.servicio.getCategorias().subscribe((Categorias) => this.listaDeCategorias = Categorias);
  }

  actualizar(categoria: Categoria): void {
    this.servicio.actualizarCategoria(categoria, this.idCategoriaCategoria).subscribe(
      () => {
        console.log(categoria)
        console.log(this.idCategoriaCategoria)
        Swal.fire(
          '¡Actualizado!',
          'La categoria se actualizó satisfactoriamente',
          'success'
        ).then(
          (result) =>{
            window.location.reload();
          }
        );
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }

  AsignarId(id: number): void {
    this.idCategoriaCategoria = id;
  }

  eliminar(categoria: Categoria): void {
    Swal.fire({
      title: 'Eliminar categoría',
      text: `¿Estás seguro de eliminar la categoría: ${categoria.nombreCategoria}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminalo!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarCategoria(categoria.idCategoria).subscribe
          ((respuesta) => { this.servicio.listadoCategorias().subscribe((categorias) => (this.listaDeCategorias = categorias)) })
        Swal.fire(
          '¡Eliminado!',
          'La categoría fue eliminada satisfactoriamente.',
          'success'
        )
      }
    })
  }
}
