import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.interface';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  constructor(private http: HttpClient) { }

  getLivro(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${environment.apiUrl}/livros/${id}`);
  }

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${environment.apiUrl}/livros`);
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${environment.apiUrl}/livros`, livro);
  }


  update(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${environment.apiUrl}/livros/${livro.id}`, livro);
  }

  remove({ id }: Livro): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/livros/${id}`);
  }
}
