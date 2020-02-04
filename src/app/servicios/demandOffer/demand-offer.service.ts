import { Offer } from './../../core/model/offer';
import { Filtro } from './../../core/control/filtro';
import { Demand } from './../../core/model/demand';
import { UserInt } from './../../interfaces/UserInt';
import { Createable } from './../../interfaces/createable';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DemandOfferService implements Createable {


  private subcribeteDemanda: Subscription;
  private subcribeteOfertas: Subscription;
  private demandasPropias: Demand[];
  private ofertasPropias: Offer[];
  private todasOfertas: Offer[];

  constructor(private afStore: DataService, private routesv: Router, private afAuth: AuthService, ) {

  }

  crearOferta(oferta: import("../../core/model/offer").Offer): boolean {
   
    oferta.$id = this.afAuth.getCurrentUserUid();
    console.log(oferta);

    this.afStore.addOffer(this.afAuth.getCurrentUserUid(), oferta);

    return true;

    throw new Error("Method not implemented.");
  }
  crearDemanda(demanda: import("../../core/model/demand").Demand): boolean {

    this.afStore.addDemand(this.afAuth.getCurrentUserUid(), demanda);
    
    return true;

    throw new Error("Method not implemented.");
  }

  getTodasDemanda() {
    this.demandasPropias = [];
    this.subcribeteDemanda = this.afStore.getAllDemands().subscribe((data: Demand[]) => {
      console.log(data);
      data.forEach(element => {
        if (this.afAuth.getCurrentUserUid() === element.$id) {
          this.demandasPropias.push(element);
        }
      });
    });

    return this.demandasPropias;

  }

  getTodasOfertas(): Offer[] {
    this.subcribeteOfertas = this.afStore.getAllOffers().subscribe((data: Offer[]) => {
      console.log("data")
      console.log(data)
      this.todasOfertas = data;
    });
    return this.todasOfertas;
  }

  getOfertasEncontradas(demanda): Offer[] {

    return new Filtro().filtrar(this.getTodasOfertas(), demanda);

  }

  getOfertasProfesor() {
    this.ofertasPropias = [];
    this.subcribeteDemanda = this.afStore.getAllOffers().subscribe((data: Offer[]) => {
      data.forEach(element => {
        if (this.afAuth.getCurrentUserUid() === element.$id) {
          this.ofertasPropias.push(element);
        }
      });
    });

    return this.ofertasPropias;
  }

}
