import { AfterViewInit, Directive, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { tap } from "rxjs/operators";
import { TableCategoriaItem } from "src/app/modules/category/pages/table-categoria/table-categoria-datasource";

@Directive()
export abstract class DefaultListDirective<T> implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableCategoriaItem>;
  dataSource = new MatTableDataSource<any>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'categoryType.name'];
  //nomes de colunas devem ser exatamente iguais aos nomes usados na bsuca do BD se forem utilizados no sorc

  defaultSortColumn: string



  dataStrategy: any;

  constructor(defaultSortColumn: string) {
    this.defaultSortColumn = defaultSortColumn;// this é o contexto maior, dentro do contexto menor variaveis não precisam usar o this
  }

  private init() {
    this.paginator.pageSizeOptions = [5, 10, 20];
    this.paginator.pageSize = 10;
    this.loadData();
  }

  protected loadData(){

  }

  ngAfterViewInit(): void {
    this._startSort();
    this._startPaginator();
    this.table.dataSource = this.dataSource; // os dados são atribuidos a variavel ja presente na tabela que imprime os mesmos
  }

  private _startPaginator() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadData();
        })
      )
      .subscribe();
  }

  private _startSort() {
    this.sort.sortChange
      .pipe(
        tap(() => {
          this.loadData();
        })
      )
      .subscribe();
  }
}
