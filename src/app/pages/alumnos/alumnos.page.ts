import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons, IonLabel, IonItem, IonList, IonFabButton, IonFabList, IonFab } from '@ionic/angular/standalone';
import { Alumno, AlumnoService } from 'src/app/services/alumno.service';
import { Router } from '@angular/router';
import {addIcons} from 'ionicons';
import {create, trash, addCircleOutline, chevronForwardCircle, document, colorPalette, globe, chevronUpCircle, menuOutline, addOutline, informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
  standalone: true,
  imports: [IonFab, IonFabList, IonFabButton,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlumnosPage implements OnInit {

  alumnos: Alumno[] = [];

  constructor(private readonly alumnoService: AlumnoService, private readonly router: Router) {
    addIcons({addCircleOutline,create,trash,menuOutline,addOutline,informationCircleOutline,chevronUpCircle,document,colorPalette,globe,chevronForwardCircle});
   }

  ngOnInit() {
    this.cargarAlumnos();
  }
  ionViewWillEnter() {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnoService.getAlumnos().subscribe(
      data => {
        this.alumnos = data;
      },
      error => {
        console.error('Error al obtener alumnos', error);
      }
    );
  }

  agregarAlumno() {
    this.router.navigate(['/agregar-alumno']);
  }

  editarAlumno(alumno: Alumno) {
    this.router.navigate(['/editar-alumno', alumno.id]);
  }

  eliminarAlumno(alumno: Alumno) {
    //TODO
  }

  verAcercaDe() {
    this.router.navigate(['/acerca-de']);
  }

}
