import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ListadoComponent2 } from './producto/listado/listado.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:'', component:BienvenidoComponent},
  {path: 'categorias', component:CategoriaComponent},
  {path: 'listadoCategorias', component:ListadoComponent},
  {path: 'listadoProductos', component:ListadoComponent2},
  {path: 'productos', component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
