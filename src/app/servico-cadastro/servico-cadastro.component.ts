import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../servico/servico.interface';
import { ServicoService } from '../servico/servico.service';

@Component({
  selector: 'app-servico-cadastro',
  templateUrl: './servico-cadastro.component.html',
  styleUrls: ['./servico-cadastro.component.css']
})
export class ServicoCadastroComponent implements OnInit {
  isUpdate: boolean = false;
  servicoForm: FormGroup = this.formBuilder.group({
    id: 0,
    descricao: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
    ],
    valor: [
      0,
      [Validators.required],
    ],
    tempo: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    deslocamento: [
      false,
      [Validators.required],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private servicoService: ServicoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.isUpdate = true;
      this.servicoService.getServico(id).subscribe((servico) => {
        console.log(servico);
        this.servicoForm.patchValue(servico);
      }, (erro) => {
        console.log('Erro: ', erro);
      })
    }
  }

  onSubmit() {
    console.log(this.servicoForm.valid);
    console.log(this.servicoForm.value);

    const servico: Servico = this.servicoForm.value;

    if (servico.id) {
      this.servicoService.update(servico).subscribe(() => this.redirect());
    } else {
      this.servicoService.save(servico).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/servico']);
  }

}
