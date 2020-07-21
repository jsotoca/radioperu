import { EmisoraI } from 'src/app/interfaces/emisoras.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent implements OnInit {

  @Input() emisoraSeleccionada:EmisoraI = null;
  @Input() estaReproducciendo:boolean;

  constructor() { }

  ngOnInit() {}

}
