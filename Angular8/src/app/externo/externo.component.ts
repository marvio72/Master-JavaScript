import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import * as moment from "moment";

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

    public user: any;
    public userId: any;
    public fecha: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1;
  }

  ngOnInit() {
    moment.locale('es');
    this.fecha = new Date();
    this.cargaUsuario();
  }

  cargaUsuario() {
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
