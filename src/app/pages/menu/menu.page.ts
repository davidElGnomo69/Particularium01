import { DemandOfferService } from './../../servicios/demandOffer/demand-offer.service';
import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/core/model/offer';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private ofertas: Offer[] = [];

  constructor(private ofertaServ: DemandOfferService, public loadingController: LoadingController) {
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.ObtenerOfertas();
    console.log("hola")
  }

  async ObtenerOfertas() {
    await this.ofertaServ.ObtenerOfertasProfesor();
    this.ofertas=this.ofertaServ.$ofertasPropias;
    console.log(this.ofertas)
  }

}
