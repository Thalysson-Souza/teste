import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from './servico.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  getServico(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${environment.apiUrl}/servico/${id}`);
  }

  getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${environment.apiUrl}/servico`);
  }

  save(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(`${environment.apiUrl}/servico`, servico);
  }

  update(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${environment.apiUrl}/servico/${servico.id}`, servico);
  }

  remove({ id }: Servico): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/servico/${id}`);
  }
}
