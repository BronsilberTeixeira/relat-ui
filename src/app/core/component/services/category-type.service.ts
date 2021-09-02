import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryTypeService {
 private readonly API: string = "http://localhost:8080/category-type";

  constructor(private http: HttpClient) { }

  acharTodosTiposCategoria(){
    return this.http.get<any[]>(this.API); // peg{filter}a as categorias presentes a API
  }
}
