import { Component, OnInit } from '@angular/core';
import { ExpedienteI } from '../../models/expediente.interface';
import { ExpedienteService } from '../../services/expediente.service';
import {ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-nuevoexpediente',
  templateUrl: './nuevoexpediente.page.html',
  styleUrls: ['./nuevoexpediente.page.scss'],
})
export class NuevoexpedientePage implements OnInit {
  
  expediente: ExpedienteI = {
    //id: string,
    apellidos: '',
    nombres: '',
    ci: '',
    numero: 0
  };

  
  
  constructor( 
    private route: ActivatedRoute, private nav: NavController,
    private expService: ExpedienteService, private loadingController: LoadingController
    
    ) { } 
  

  ngOnInit() {   
    
  
  }

  insertar(){
    
    this.expService.addExpediente(this.expediente).then(() => {
      console.log('Tarea creada correctamente')
      this.nav.navigateForward('/tabs/expedientes')
    })
  }
  
}

  

