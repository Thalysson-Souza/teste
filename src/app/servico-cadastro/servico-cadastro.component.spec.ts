import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCadastroComponent } from './servico-cadastro.component';

describe('ServicoCadastroComponent', () => {
  let component: ServicoCadastroComponent;
  let fixture: ComponentFixture<ServicoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
