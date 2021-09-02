import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProdutoComponent } from './table-produto.component';

describe('TableProdutoComponent', () => {
  let component: TableProdutoComponent;
  let fixture: ComponentFixture<TableProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
