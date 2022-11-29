import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from './pet.interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${environment.apiUrl}/pet/${id}`);
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${environment.apiUrl}/pet`);
  }

  save(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${environment.apiUrl}/pet`, pet);
  }

  update(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${environment.apiUrl}/pet/${pet.id}`, pet);
  }

  remove({ id }: Pet): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/pet/${id}`);
  }
}
