
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly API: string = "http://localhost:8080/category";

  constructor(private http: HttpClient) { }

  listCategoria( filter: string, page: number, orderBy: string, direction: string, linesPerPage: string, categoryTypeId: string  ){
    const params = {filter, page, orderBy, direction, linesPerPage, categoryTypeId};
    return this.http.get<any[]>(this.API, {params}); // peg{filter}a as categorias presentes a API
  }

  criarCategoria(categoria: any){
    return this.http.post<any>(this.API, categoria);
  }

  deleteCategoria(id: string){
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  updateCategoria(id:string, categoria: any){
    return this.http.put<any>(`${this.API}/${id}`, categoria);
  }
}
