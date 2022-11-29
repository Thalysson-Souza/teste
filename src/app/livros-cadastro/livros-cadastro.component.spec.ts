import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosCadastroComponent } from './livros-cadastro.component';

describe('LivrosCadastroComponent', () => {
  let component: LivrosCadastroComponent;
  let fixture: ComponentFixture<LivrosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
