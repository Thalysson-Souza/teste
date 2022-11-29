import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estoque } from '../estoque/estoque.interface';
import { EstoqueService } from '../estoque/estoque.service';

@Component({
  selector: 'app-estoque-cadastro',
  templateUrl: './estoque-cadastro.component.html',
  styleUrls: ['./estoque-cadastro.component.css']
})
export class EstoqueCadastroComponent implements OnInit {
  isUpdate: boolean = false;
  estoqueForm: FormGroup = this.formBuilder.group({
    id: 0,
    descricao: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    quantidade: [
      0,
      [Validators.required],
    ],
    valor: [
      0,
      [Validators.required],
    ],
    fornecedor: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    fabricante: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private estoqueService: EstoqueService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.isUpdate = true;
      this.estoqueService.getEstoque(id).subscribe((estoque) => {
        console.log(estoque);
        this.estoqueForm.patchValue(estoque);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.estoqueForm.valid);
    console.log(this.estoqueForm.value);

    const estoque: Estoque = this.estoqueForm.value;

    if (estoque.id) {
      this.estoqueService.update(estoque).subscribe(() => this.redirect());
    } else {
      this.estoqueService.save(estoque).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/estoque']);
  }

}
