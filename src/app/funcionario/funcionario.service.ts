import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from './funcionario.interface';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${environment.apiUrl}/funcionario/${id}`);
  }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${environment.apiUrl}/funcionario`);
  }

  save(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${environment.apiUrl}/funcionario`, funcionario);
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${environment.apiUrl}/funcionario/${funcionario.id}`, funcionario);
  }

  remove({ id }: Funcionario): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/funcionario/${id}`);
  }
}
