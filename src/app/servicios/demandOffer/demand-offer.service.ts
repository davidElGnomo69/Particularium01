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
    oferta.id = (this.todasOfertas.length + 1).toString();
    oferta.idUser = this.afAuth.getCurrentUserUid();
    console.log(oferta);

    this.afStore.addOffer(this.afAuth.getCurrentUserUid(), oferta);

    this.routesv.navigateByUrl('/menu');

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
      data.forEach(element => {
        if (this.afAuth.getCurrentUserUid() === element.$id) {
          this.demandasPropias.push(element);
        }
      });
    });

    return this.demandasPropias;

  }

  async getTodasOfertas() {
    // this.subcribeteOfertas = this.afStore.getAllOffers().subscribe((data: Offer[]) => {
    // this.$todasOfertas  = data;
    //   console.log(this.$todasOfertas);
    //});
    return this.afStore.getAllOffersDos();

  }

  getOfertasEncontradas(demanda): Offer[] {

    return new Filtro().filtrar(this.todasOfertas, demanda);

  }

  async ObtenerOfertasProfesor() {
    var ofertas = []
    var ofertasProfesor = []
    await this.getTodasOfertas().then((data: Offer[]) => {
      for (let index = 1; index < data.length; index++) {
        console.log('idUser:', this.afAuth.getCurrentUserUid());
        console.log('idUserOferta:', data[index].idUser);
        ofertasProfesor.push(data[index]);
        if (data[index].idUser === this.afAuth.getCurrentUserUid()) {
          ofertas.push(data[index]);
        }

      }
      this.$todasOfertas = ofertasProfesor;
      console.log(ofertasProfesor)
      this.$ofertasPropias = ofertas;
      console.log(ofertas);
    });
  }

  /**
   * Getter $todasOfertas
   * @return {Offer[]}
   */
  public get $todasOfertas(): Offer[] {
    return this.todasOfertas;
  }

  /**
   * Setter $todasOfertas
   * @param {Offer[]} value
   */
  public set $todasOfertas(value: Offer[]) {
    this.todasOfertas = value;
  }


  /**
   * Getter $ofertasPropias
   * @return {Offer[]}
   */
  public get $ofertasPropias(): Offer[] {
    return this.ofertasPropias;
  }

  /**
   * Setter $ofertasPropias
   * @param {Offer[]} value
   */
  public set $ofertasPropias(value: Offer[]) {
    this.ofertasPropias = value;
  }


}
