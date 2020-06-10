import { Component, OnInit } from '@angular/core';
import { ExpedienteI } from '../../models/expediente.interface';
import { ExpedienteService } from '../../services/expediente.service';
import { CasoI } from '../../models/caso.interface';
import { CasoService } from '../../services/caso.service';
import { ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-nuevocaso',
  templateUrl: './nuevocaso.page.html',
  styleUrls: ['./nuevocaso.page.scss'],
})
export class NuevocasoPage implements OnInit {

  expediente: ExpedienteI = {
    //id?: '',
    apellidos: '',
    nombres: '',
    ci: '',
    numero: 0
  };
  expedienteID = null;

  caso: CasoI = {
    area: '',
    tipo: '',
    apellidos: '',
    nombres: '',
    idexpediente: ''
  }

  constructor( 
    private route: ActivatedRoute, private nav: NavController,
    private expService: ExpedienteService, private casoService: CasoService ,private loadingController: LoadingController
    ) { }

  ngOnInit() {

    this.expedienteID = this.route.snapshot.params['id'];
    //console.log('id aqui en nuevo caso', this.expedienteID);
    
    if(this.expedienteID){
      this.loadExpediente();
    }


  }

  
   
  
  async loadExpediente(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    const elid=this.expedienteID.replace(/\s*$/,"");
        
    //console.log("Este es el id copiado: ", elid)
    this.expService.getExpediente(elid).subscribe(res => {
      loading.dismiss();
      this.expediente = res;
      console.log(this.expediente);
    })

    
    
  }
  insertar(){
    //console.log("los datos del caso:", this.caso);
    this.caso.apellidos = this.expediente.apellidos;
    this.caso.nombres = this.expediente.nombres;
    const estesieselid = this.expedienteID.replace(/\s*$/,"");
    this.caso.idexpediente = estesieselid;
    console.log("Los datos completos:", this.caso)
    this.casoService.addCaso(this.caso).then(() => {
      console.log('Tarea creada correctamente')
      this.nav.navigateForward('/cliente/' + estesieselid)
    })
  }
  
}
