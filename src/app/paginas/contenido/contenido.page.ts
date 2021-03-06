import { StorageService } from './../../servicios/storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Howl } from 'howler';
import { EmisoraI } from 'src/app/interfaces/emisoras.interface';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  emisoras:EmisoraI[] = [
    {
        titulo: "rpp", 
        stream: "https://22223.live.streamtheworld.com/RADIO_RPP_SC",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/rpp.png"
    },
    {
        titulo: "corazon", 
        stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_CORAZON_SC",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/corazon.png"
    },
    {
        titulo: "moda", 
        stream: "https://19493.live.streamtheworld.com/CRP_MOD_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/moda.png"
    },
    {
        titulo: "la zona", 
        stream: "https://15383.live.streamtheworld.com/RADIO_LAZONA_SC",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/zona.png"
    },
    {
        titulo: "studio 92", 
        stream: "https://20803.live.streamtheworld.com/RADIO_STUDIO92_SC",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/studio92.png"
    },
    {
        titulo: "onda cero", 
        stream: "http://192.99.148.184:6720/stream/1/",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/ondacero.png"
    },
    {
        titulo: "exitosa", 
        stream: "http://167.114.118.119:7450/;",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/exitosa.png"
    },
    {
        titulo: "planeta", 
        stream: "https://19013.live.streamtheworld.com/CRP_PLA_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/planeta.png"
    },
    {
        titulo: "panemericana", 
        stream: "http://192.99.148.184:6710/;*.mp3",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/panamericana.png"
    },
    {
        titulo: "radiomar", 
        stream: "https://18323.live.streamtheworld.com/CRP_MAR_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/radiomar.png"
    },
    {
        titulo:"oasis", 
        stream: "https://19013.live.streamtheworld.com/CRP_OAS_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/oasis.png"
    },
    {
        titulo: "felicidad", 
        stream: "https://18313.live.streamtheworld.com/RADIO_FELICIDAD_SC",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/felicidad.png"
    },
    {
        titulo: "la kalle", 
        stream: "http://167.114.118.120:7448/;",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/kalle.png"
    },
    {
        titulo: "z rock & pop", 
        stream: "http://167.114.118.120:7440/;",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/z.png"
    },
    {
        titulo: "oxigeno", 
        stream: "https://20813.live.streamtheworld.com/RADIO_OXIGENO_SC",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/oxigeno.png"
    },
    {
        titulo: "nueva q", 
        stream: "https://14653.live.streamtheworld.com/CRP_NQ_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/nuevaq.png"
    },
    {
        titulo: "capital", 
        stream: "https://15383.live.streamtheworld.com/RADIO_CAPITAL_SC",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/capital.png"
    },
    {
        titulo: "la inolvidable", 
        stream: "https://19253.live.streamtheworld.com/CRP_LI_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/inolvidable.png"
    },
    {
        titulo: "viva fm", 
        stream: "https://tupanel.info:8746/stream",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/vivafm.png"
    },
    {
        titulo: "magica", 
        stream: "https://19493.live.streamtheworld.com/MAG_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/magica.png"
    },
    {
        titulo: "cumbia mix", 
        stream: "http://192.99.148.184:6730/;*.nsv",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/cumbiamix.png"
    },
    {
        titulo: "generacion kpop", 
        stream: "http://192.99.14.225:9962/;",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/kpop.png"
    },
    {
        titulo: "perucumbia", 
        stream: "https://tupanel.info:2000/stream/perucumbia",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/perucumbia.png"
    },
    {
        titulo: "telesterio", 
        stream: "http://67.212.179.138:8300/;",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/telestereo.png"
    },
    {
        titulo: "uno", 
        stream: "https://streamingv2.shoutcast.com/radiounotacna",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/uno.png"
    },
    {
        titulo: "radio maria", 
        stream: "https://dreamsiteradiocp4.com/proxy/rmperu2?mp=/stream/1/",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/maria.png"
    },
    {
        titulo: "perufolkradio", 
        stream: "https://gnstreammedia.net:9020/stream",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/perufolkradio.png"
    },
    {
        titulo: "radio bethel", 
        stream: "http://96.31.83.86:8158/stream?1595270624498",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/bethel.png"
    },
    {
        titulo: "union", 
        stream: "http://67.212.179.138:7218/;?_=0.9957225059656298",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/union.png"
    },
    {
        titulo: "antenasur", 
        stream: "http://node-20.zeno.fm/tu63bf6g31zuv?rj-ttl=5&rj-tok=AAABc22FjyQAIL1M4n2mnhsZOA",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/antenasur.png"
    },
    {
        titulo: "sonorama", 
        stream: "https://18813.live.streamtheworld.com/CRP_SON_S01_SC?dist=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/sonorama.png"
    },
    {
        titulo: "inca", 
        stream: "https://14013.live.streamtheworld.com/CRP_INC_SC?type=20001",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/inca.png"
    },
    {
        titulo: "nova", 
        stream: "http://node-33.zeno.fm/t5hu9gh8z5quv?rj-ttl=5&rj-tok=AAABc22H9tYApFCeKAo_WL43jA",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/nova.png"
    },
    {
        titulo: "exito", 
        stream: "http://67.212.179.138:7200/;stream/1;",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/exito.png"
    },
    {
        titulo: "red ingetridad", 
        stream: "https://player.servidor.stream/secure-ssl/7006",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/integridad.png"
    },
    {
        titulo: "marañon", 
        stream: "https://serverssl.innovatestream.pe:8080/http://167.114.118.120:7112/stream/1/",
        logo: "https://radioperu.s3.us-east-2.amazonaws.com/emisoras/marañon.png"
    },
  ];

  @ViewChild('slidesPrincipal',{static:true}) slides:IonSlides;
  emisoraSeleccionada:EmisoraI = null;
  reproductor:Howl = null;
  estaReproduciendo:boolean = false;
  esFavorito:boolean = null;
  
  constructor(
      public storage:StorageService
  ) { }

  ngOnInit() {
    this.emisoraSeleccionada = this.emisoras[10];
    this.reproducir();
    this.slides.lockSwipes(true);
  }

  moverPantalla(indice:number){
    this.slides.lockSwipes(false);
    this.slides.slideTo(indice);
    this.slides.lockSwipes(true);
  }

  seleccionarEmisora(emisora:EmisoraI){
    this.emisoraSeleccionada = emisora;
    this.reproducir();
  }

  async reproducir(){
    this.detener();
    this.esFavorito = await this.storage.emisoraYaGuardada(this.emisoraSeleccionada);
    this.reproductor = new Howl({
        src:this.emisoraSeleccionada.stream,
        html5:true,
        onloaderror: ()=>{
        },
        onplay: async ()=>{
            this.estaReproduciendo = true;
        }
    });
    this.reproductor.play();
  }

  detener(){
    if(this.reproductor){
        this.estaReproduciendo = false;
        this.reproductor.stop();
    } 
  }

  cambiarEstado(){
      if(this.estaReproduciendo) this.detener();
      else this.reproducir();
  }

  cambiarEmisora(mover:number){
    this.detener();
    let idx = this.emisoras.indexOf(this.emisoraSeleccionada);
    idx+=mover;
    if(idx == -1) idx = this.emisoras.length -1 ;
    if(idx == this.emisoras.length) idx = 0 ;
    this.emisoraSeleccionada = this.emisoras[idx];
    this.reproducir();
  }

  async guardarFavorito(){
    const guardado = await this.storage.guardarEmisora(this.emisoraSeleccionada);
    this.esFavorito = guardado;
  }

}
