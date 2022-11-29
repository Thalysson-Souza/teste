import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa/pessoa.interface';
import { PessoaService } from '../pessoa/pessoa.service';
import { Pet } from '../pet/pet.interface';
import { PetService } from '../pet/pet.service';

@Component({
  selector: 'pet-cadastro',
  templateUrl: './pet-cadastro.component.html',
  styleUrls: ['./pet-cadastro.component.css']
})
export class PetCadastroComponent implements OnInit {
  isUpdate: boolean = false;
  selectedPessoa: string = '0';
  pessoas: Pessoa[] = [];
  petForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    raca: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    cor: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    id_dono: [
      [Validators.required]
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listPessoas();
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.isUpdate = true;
      this.petService.getPet(id).subscribe((pet) => {
        console.log(pet);
        this.petForm.patchValue(pet);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSelected(value: string): void {
    this.selectedPessoa = value;
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
    console.log(this.petForm.valid);
    console.log(this.petForm.value);

    const pet: Pet = this.petForm.value;
    pet.id_dono = parseInt(this.petForm.value.id_dono)

    if (pet.id) {
      this.petService.update(pet).subscribe(() => this.redirect());
    } else {
      this.petService.save(pet).subscribe(() => this.redirect());
    }

  }

  redirect() {
    this.router.navigate(['/pet']);
  }

}
