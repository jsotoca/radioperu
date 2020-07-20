import { UiService } from './../../servicios/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  constructor(
    private readonly ui:UiService
  ) { }

  ngOnInit() {}

  cambiarModoVisual(){
    document.body.classList.toggle('dark');
  }

}
