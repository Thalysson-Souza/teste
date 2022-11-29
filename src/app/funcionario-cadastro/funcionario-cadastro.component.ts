import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario/funcionario.interface';
import { FuncionarioService } from '../funcionario/funcionario.service';
import { Pessoa } from '../pessoa/pessoa.interface';
import { PessoaService } from '../pessoa/pessoa.service';

@Component({
  selector: 'app-funcionario-cadastro',
  templateUrl: './funcionario-cadastro.component.html',
  styleUrls: ['./funcionario-cadastro.component.css']
})
export class FuncionarioCadastroComponent implements OnInit {
  isUpdate: boolean = false;
  pessoas: Pessoa[] = [];
  funcionarioForm: FormGroup = this.formBuilder.group({
    id: 0,
    funcao: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    salario: [
      0,
      [Validators.required],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listPessoas()
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.isUpdate = true;
      this.funcionarioService.getFuncionario(id).subscribe((funcionario) => {
        console.log(funcionario);
        this.funcionarioForm.patchValue(funcionario);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  listPessoas() {
    this.pessoaService.getPessoas().subscribe(
      (pessoas) => {
        this.pessoas = pessoas;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  onSubmit() {
    console.log(this.funcionarioForm.valid);
    console.log(this.funcionarioForm.value);

    const funcionario: Funcionario = this.funcionarioForm.value;

    if (funcionario.id) {
      this.funcionarioService.update(funcionario).subscribe(() => this.redirect());
    } else {
      this.funcionarioService.save(funcionario).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/funcionario']);
  }
}
