import { DeleteComponent } from './../../../../shared/components/delete/delete.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { CategoryTypeService } from 'src/app/core/component/services/category-type.service';
import { CategoriasService } from './../../../../core/component/services/categorias.service';
import { DialogService } from './../../../../shared/services/dialog.service';
import { FormCategoriaComponent } from './../components/form-categoria/form-categoria.component';
import { TableCategoriaItem } from './table-categoria-datasource';
import { SnackbarService } from 'src/app/core/component/services/snackbar.service';

@Component({
  selector: 'app-table-categoria',
  templateUrl: './table-categoria.component.html',
  styleUrls: ['./table-categoria.component.scss'],
})
export class TableCategoriaComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableCategoriaItem>;
  dataSource = new MatTableDataSource<any>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'categoryType.name', 'acoes'];
  //nomes de colunas devem ser exatamente iguais aos nomes usados na bsuca do BD se forem utilizados no sorc

  formBusca = new FormGroup({
    filter: new FormControl(),
    categoryTypeId: new FormControl(),
  });

  tiposCategoria: any[] = [];

  constructor(
    private service: CategoriasService,
    private categoryTipeService: CategoryTypeService,
    private snackBar: SnackbarService,
    private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.init();
    this.categoryTipeService
      .acharTodosTiposCategoria()
      .subscribe((dados: any) => {
        this.tiposCategoria = dados;
      });
  }

  private init() {
    this.paginator.pageSizeOptions = [5, 10, 20];
    this.paginator.pageSize = 10;
    this.loadData();
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

  getControl(group: FormGroup, control: string): FormControl {
    return group.get(control) as FormControl;
  }

  loadData() {
    const filter = this.formBusca.get('filter')?.value ?? '';
    const sort = this.sort.active ?? 'name';
    const direction = this.sort.direction === '' ? 'ASC' : this.sort.direction;
    const categoryTypeId = this.formBusca.get('categoryTypeId')?.value ?? '';
    this.service
      .listCategoria(
        filter,
        this.paginator.pageIndex,
        sort,
        direction,
        this.paginator.pageSize.toString(),
        categoryTypeId
      )
      .subscribe((dados: any) => {
        this.dataSource.data = dados.content; // atribui os dados pegos do back-end/API e os coloca na variavel dataSource
        this.paginator.length = dados.totalElements; // ordena os dados que serão mostrados
      });
  }

  criarCategoria(){
      this.dialogService.open(FormCategoriaComponent, {
        width: '800px'
      }).afterClosed().subscribe(() => this.loadData());
  }

  excluirCategoria(id: string){
    this.dialogService.open(DeleteComponent, {
      width: '800px'
    }).afterClosed().subscribe((confirma) => {
      if (confirma){
        this.service.deleteCategoria(id).subscribe(() => {
          this.snackBar.openSuccess('excluido com sucesso!');
        })
      }
    });
  }
}
//Cntrl + shift + R =>
//sort = ordanação dos dados
