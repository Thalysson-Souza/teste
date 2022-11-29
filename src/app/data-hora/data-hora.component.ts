import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {
  timer: any;
  
  dataHora: Date = new Date();
  // dataHoraString: string;
  valor: number;
  // valor: string;

  constructor() {
    // this.dataHoraString = new Date().toLocaleString();
    this.startTimer();
    // this.valor = new Intl.NumberFormat('pt-BR').format(2.54);
    this.valor = 2.54;
  }
  ngOnInit(): void {}

  toggleTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    } else {
      this.startTimer();
    }
  }
  private startTimer() {
    this.timer = setInterval(() => {
      this.dataHora = new Date();
    }, 1000);
  }
}
