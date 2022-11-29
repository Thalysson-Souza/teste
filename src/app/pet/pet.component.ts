import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa/pessoa.service';
import { Pet } from './pet.interface';
import { PetService } from './pet.service';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pets: Pet[] = [];

  constructor(
    private petService: PetService,
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.petService.getPets().subscribe(
      (pets) => {
        this.pets = pets;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(pet: Pet) {
    this.petService.remove(pet).subscribe(
      () => this.list(),
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }
  getNameDono({ id_dono }: Pet) {
    this.pessoaService.getPessoa(id_dono).subscribe(
      (result) => {
        return `${result.nome} ${result.sobrenome}`
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

}
