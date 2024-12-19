import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Alumno {
  id?: number;
  nombre: string;
  edad: number;
  curso: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private readonly apiUrl = 'http://localhost:3000/alumnos';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private readonly http: HttpClient) { }

  // Obtener todos los alumnos
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  // Obtener un alumno por ID
  getAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo alumno
  addAlumno(alumno: Alumno): Observable<Alumno> {
    //TODO
    //return this.http.post<Alumno>...
  }

  // Actualizar un alumno existente
  updateAlumno(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.apiUrl}/${id}`, alumno, this.httpOptions);
  }

  // Eliminar un alumno
  deleteAlumno(id: number): Observable<Alumno> {
    //TODO
    //return this.http.delete<Alumno>...
  }
}

