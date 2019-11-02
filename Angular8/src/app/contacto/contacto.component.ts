import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contacto_usuario: ContactoUsuario;
  public show_data;

  constructor() {
    this.contacto_usuario = new ContactoUsuario('', '', '', '');
   }

  ngOnInit() {
  }

  onSubmit(form) {
    this.show_data = this.contacto_usuario;
    console.log(this.show_data);
    // form.reset();
  }
}
