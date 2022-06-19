import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Categoria } from '../modelo/categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endPoint : string = 'https://apinventarios.herokuapp.com/api/categoria';
  constructor (private http : HttpClient) {}
    private httpHeaders = new HttpHeaders({'ContentType':'application/json'})
    
    listadoCategorias(): Observable<Categoria[]>{
        return  this.http
        .get(this.endPoint)
        .pipe(map((response => response as Categoria[])));
    }

    getCategorias(): Observable<Categoria[]> {
        return this.http.get(this.endPoint).pipe(
          map(response => response as Categoria[])
        );
      }

  eliminarCategoria(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.endPoint}/${id}`, {headers: this.httpHeaders});
  }

  leerCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.endPoint}/${id}`);
  }

  crearCategoria(category: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.endPoint, category, {headers: this.httpHeaders});
  }

  actualizarCategoria(category: Categoria , id: number): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.endPoint}/${id}`, category, {headers: this.httpHeaders});
  }

  buscarCategoria(term: number): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.endPoint}/${term}`).pipe(
      map(response => response as Categoria[])
    );

    }
}