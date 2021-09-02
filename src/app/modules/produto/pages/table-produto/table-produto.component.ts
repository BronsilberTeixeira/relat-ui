import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TableCategoriaItem } from 'src/app/modules/category/pages/table-categoria/table-categoria-datasource';
import { ProdutoService } from './../../../../core/component/services/produto.service';

@Component({
  selector: 'app-table-produto',
  templateUrl: './table-produto.component.html',
  styleUrls: ['./table-produto.component.scss']
})
export class TableProdutoComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableCategoriaItem>;
  // dataSource: TableCategoriaDataSource;

  dataSource = new MatTableDataSource<any>();

  formBusca = new FormGroup({
    filter:  new FormControl(),
  });
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'brand.name'];
  //nomes de colunas devem ser exatamente iguais aos nomes usados na busuca do BD se forem utilizados no sorc

  constructor(private service: ProdutoService) {
    //this.dataSource = new TableCategoriaDataSource();
  }

  ngOnInit(): void {
   this.buscarProduto();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;// os dados são atribuidos a variavel ja presente na tabela que imprime os mesmos
  }

  getControl(group: FormGroup, control: string): FormControl{
    return group.get(control) as FormControl;
  }

  buscarProduto(){
    const filter = this.formBusca.get('filter')?.value ?? '';
    const sort = this.sort.active ?? 'name';
    const direction = this.sort.direction === '' ? 'ASC' : this.sort.direction
    this.service.listProduto(filter, this.paginator.pageIndex, sort, direction).subscribe((dados: any) => {
      this.dataSource.data = dados.content; // atribui os dados pegos do back-end/API e os coloca na variavel dataSource
      this.paginator.length = dados.totalElements;// ordena os dados que serão mostrados
    });
  }

}
