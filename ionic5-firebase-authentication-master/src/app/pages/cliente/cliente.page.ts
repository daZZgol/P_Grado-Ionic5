import { Component, OnInit } from '@angular/core';
import { ExpedienteI } from '../../models/expediente.interface';
import { ExpedienteService } from '../../services/expediente.service';
import {ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular';
import { CasoI } from 'src/app/models/caso.interface';
import { CasoService } from '../../services/caso.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  
  expediente: ExpedienteI = {
    //id?: '',
    apellidos: '',
    nombres: '',
    ci: '',
    numero: 0
  };
  expedienteID = null;

  caso: CasoI[];
  /*caso: CasoI = {
    area: '',
    tipo: '',
    apellidos: '',
    nombres: '',
    idexpediente: ''
  }*/

  constructor( 
    private route: ActivatedRoute, private nav: NavController,
    private expService: ExpedienteService, private casoService: CasoService, 
    private loadingController: LoadingController
    ) { }

  ngOnInit() {

    

    this.expedienteID = this.route.snapshot.params['id'];
    //console.log('id aqui en cliente', this.expedienteID);
    
    
    this.casoService.consultaCaso(this.expedienteID).subscribe( ref => {
      this.caso = ref;
      console.log(this.caso);
    })

    //console.log("Los casos: ", this.caso)
    if(this.expedienteID){
      this.loadExpediente();
    }
    

  }

  
   
  
  async loadExpediente(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.expService.getExpediente(this.expedienteID).subscribe(res => {
      loading.dismiss();
      this.expediente = res;
      console.log("Con datos",this.expediente);
    })
    //console.log("Sin datos:",this.expediente)
  }

  //exp = this.expedienteID;
  
  

}
