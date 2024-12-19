import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonList, IonButton, IonItem, IonHeader, IonTitle, IonToolbar, IonLabel, IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlumnoService, Alumno } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.page.html',
  styleUrls: ['./agregar-alumno.page.scss'],
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
export class AgregarAlumnoPage implements OnInit {

  alumnoForm: FormGroup;

  constructor(
    private readonly alumnoService: AlumnoService,
    private readonly router: Router
  ) {
    this.alumnoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      edad: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  agregar() {
    if (this.alumnoForm.valid) {
      const nuevoAlumno: Alumno = this.alumnoForm.value;
      //TODO
    }
  }

  cancelar() {
    this.router.navigate(['/alumnos']);
  }

}
