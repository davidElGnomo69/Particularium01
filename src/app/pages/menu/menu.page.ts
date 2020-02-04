import { Offer } from 'src/app/core/model/offer';
import { DemandOfferService } from './../../servicios/demandOffer/demand-offer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  ofertas: Offer[] = [];

  constructor(private ofertaServ: DemandOfferService) {
    this.ofertas = this.ofertaServ.getTodasOfertas();
    this.ofertaServ.getTodasDemanda();
  }

  ngOnInit() {
  }




}
