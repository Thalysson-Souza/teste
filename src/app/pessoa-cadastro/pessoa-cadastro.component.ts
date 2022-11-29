import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa/pessoa.interface';
import { PessoaService } from '../pessoa/pessoa.service';

@Component({
  selector: 'pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  isUpdate: boolean = false;
  pessoaForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    sobrenome: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(100)],
    ],
    cpf: [
      '',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.required],
    ],
    telefone: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.required],
    ],
    dataNascimento: [
      '2000-01-01',
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.isUpdate = true;
      this.pessoaService.getPessoa(id).subscribe((pessoa) => {
        console.log(pessoa);
        this.pessoaForm.patchValue(pessoa);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.pessoaForm.valid);
    console.log(this.pessoaForm.value);

    const pessoa: Pessoa = this.pessoaForm.value;

    if (pessoa.id) {
      this.pessoaService.update(pessoa).subscribe(() => this.redirect());
    } else {
      this.pessoaService.save(pessoa).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/pessoa']);
  }

}
