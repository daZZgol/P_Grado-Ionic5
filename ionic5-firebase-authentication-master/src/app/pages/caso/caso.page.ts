import { Component, OnInit } from '@angular/core';
import { ExpedienteI } from '../../models/expediente.interface';
import { ExpedienteService } from '../../services/expediente.service';
import { CasoI } from '../../models/caso.interface';
import { CasoService } from '../../services/caso.service';
import { ActivatedRoute } from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-caso',
  templateUrl: './caso.page.html',
  styleUrls: ['./caso.page.scss'],
})
export class CasoPage implements OnInit {

  caso: CasoI[];
  /*caso: CasoI = {
    area: '',
    tipo: '',
    apellidos: '',
    nombres: '',
    idexpediente: '',
    ci: '',
    idaux: ''
  }*/
  casoID = null;
  
  constructor(private route: ActivatedRoute, private nav: NavController,
    private expService: ExpedienteService, private casoService: CasoService ,private loadingController: LoadingController) { }

  ngOnInit() {

    this.casoID = this.route.snapshot.params['id'];
    //console.log(this.casoID);
    if(this.casoID){
      this.loadExpediente();
    }

    
  }

  async loadExpediente(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.casoService.consultaDatos(this.casoID).subscribe(res => {
      loading.dismiss();
      this.caso = res;
      //console.log(this.caso);
    })
    
    //console.log(this.caso);
  }

}
