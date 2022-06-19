import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria, CategoriaUpdate } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  titulo: string = 'Listado de categorías';
  categoria: Categoria = new Categoria();

  constructor(
    private servicio: CategoriaService, 
    private router: Router) {}

  ngOnInit(): void {
  }

  almacenarCategoria(categoria: Categoria): void {
    this.servicio.crearCategoria(categoria).subscribe(result => {
        Swal.fire(
          'Administración de Productos',
          'La categoria se almacenó',
          'success')
        this.router.navigate(["/listadoCategorias"]);
      }
    );
  }

}
