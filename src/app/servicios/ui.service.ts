import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  cambiarModoVisual(){
    document.body.classList.toggle('dark');
  }

}
