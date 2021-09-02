import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  readonly API: string = "http://localhost:8080/product-line";

  constructor(private http: HttpClient) { }

  listProduto( filter: string, page: number, orderBy: string, direction: string ){
    const params = {filter, page, orderBy, direction};
    return this.http.get<any[]>(this.API, {params}); // peg{filter}a as categorias presentes a API
  }
}
