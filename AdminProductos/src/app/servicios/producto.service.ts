import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from "src/app/modelo/producto";


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private endPoint: string = 'https://apinventarios.herokuapp.com/api/producto';
  constructor(private http: HttpClient) { }
  private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' })
  
  listadoProductos(): Observable<Producto[]> {
    return this.http
      .get(this.endPoint)
      .pipe(map((response => response as Producto[])));
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get(this.endPoint).pipe(
      map(response => response as Producto[])
    );
  }

  eliminarProducto(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.endPoint}/${id}`, { headers: this.httpHeaders });
  }

  leerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.endPoint}/${id}`);
  }

  crearProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.endPoint, producto, {headers: this.httpHeaders});
  }

  actualizarProducto(category: Producto , id: number): Observable<Producto> {
    return this.http.put<Producto>(`${this.endPoint}/${id}`, category, {headers: this.httpHeaders});
  }


  buscarCategoria(term: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.endPoint}/${term}`).pipe(
      map(response => response as Producto[])
    );

  }
}
