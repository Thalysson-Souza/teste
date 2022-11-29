import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${environment.apiUrl}/pessoa/${id}`);
  }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${environment.apiUrl}/pessoa`);
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${environment.apiUrl}/pessoa`, pessoa);
  }

  update(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${environment.apiUrl}/pessoa/${pessoa.id}`, pessoa);
  }

  remove({ id }: Pessoa): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/pessoa/${id}`);
  }

}
