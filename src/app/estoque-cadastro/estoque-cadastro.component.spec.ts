import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCadastroComponent } from './estoque-cadastro.component';

describe('EstoqueCadastroComponent', () => {
  let component: EstoqueCadastroComponent;
  let fixture: ComponentFixture<EstoqueCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
