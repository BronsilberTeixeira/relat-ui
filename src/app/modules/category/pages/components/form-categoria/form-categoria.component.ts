import { SnackbarService } from './../../../../../core/component/services/snackbar.service';
import { CategoriasService } from './../../../../../core/component/services/categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryTypeService } from 'src/app/core/component/services/category-type.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss'],
})
export class FormCategoriaComponent implements OnInit {
  formCategoria = new FormGroup({
    categoryTypeId: new FormControl(),
    name: new FormControl(),
  });
  tiposCategoria: any[] = [];

  constructor(
    private categoryTypeService: CategoryTypeService,
    private categoriaService: CategoriasService,
    private snackBar: SnackbarService,
    public dialogRef: MatDialogRef<FormCategoriaComponent>
  ) {}

  ngOnInit(): void {
    this.categoryTypeService
      .acharTodosTiposCategoria()
      .subscribe((dados: any) => {
        this.tiposCategoria = dados;
      });
  }

  salvar() {
    this.categoriaService
      .criarCategoria(this.formCategoria.value)
      .subscribe((dados: any) => {
        this.snackBar.openSuccess('Parabens!');
        this.dialogRef.close();
      });
  }
}
