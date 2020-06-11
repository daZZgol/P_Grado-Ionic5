import { Component, OnInit } from '@angular/core';
import { ExpedienteI } from '../../models/expediente.interface';
import { ExpedienteService } from '../../services/expediente.service';


@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

  expedientes: ExpedienteI[]; 

  

  constructor(private expService:ExpedienteService) { }

  ngOnInit() {
    this.expService.getExpedientes().subscribe(res => this.expedientes = res)
    
  }   
}
