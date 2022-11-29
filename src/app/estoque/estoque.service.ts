import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estoque } from './estoque.interface';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  getEstoque(id: number): Observable<Estoque> {
    return this.http.get<Estoque>(`${environment.apiUrl}/estoque/${id}`);
  }

  getEstoques(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(`${environment.apiUrl}/estoque`);
  }

  save(estoque: Estoque): Observable<Estoque> {
    return this.http.post<Estoque>(`${environment.apiUrl}/estoque`, estoque);
  }

  update(estoque: Estoque): Observable<Estoque> {
    return this.http.put<Estoque>(`${environment.apiUrl}/estoque/${estoque.id}`, estoque);
  }

  remove({ id }: Estoque): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/estoque/${id}`);
  }

}
