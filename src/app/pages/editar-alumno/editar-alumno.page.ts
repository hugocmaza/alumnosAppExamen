import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonList, IonButton, IonItem, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService, Alumno } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.page.html',
  styleUrls: ['./editar-alumno.page.scss'],
  standalone: true,
  imports: [IonInput,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonLabel,
    IonList,
    IonButton,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
})
export class EditarAlumnoPage implements OnInit {

  alumnoForm: FormGroup;
  alumnoId: number = 0;

  constructor(
    private readonly alumnoService: AlumnoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.alumnoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      edad: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.alumnoId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarAlumno();
  }

  cargarAlumno() {
    this.alumnoService.getAlumno(this.alumnoId).subscribe(
      data => {
        this.alumnoForm.patchValue({
          nombre: data.nombre,
          edad: data.edad,
          curso: data.curso
        });
      },
      error => {
        console.error('Error al cargar alumno', error);
      }
    );
  }

  actualizar() {
    if (this.alumnoForm.valid) {
      const alumnoActualizado: Alumno = this.alumnoForm.value;
      this.alumnoService.updateAlumno(this.alumnoId, alumnoActualizado).subscribe(
        () => {
          this.router.navigate(['/alumnos']);
        },
        error => {
          console.error('Error al actualizar alumno', error);
        }
      );
    }
  }

  cancelar() {
    this.router.navigate(['/alumnos']);
  }

}
