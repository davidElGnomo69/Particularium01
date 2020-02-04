import { Demand } from './../core/model/demand';
import { Offer } from './../core/model/offer';
export interface Createable {

    crearOferta(oferta: Offer): boolean;

    crearDemanda(demanda: Demand): boolean;

    //FALTA CLASE/SERVICIO "GESTION que implemente esta interface y cree nuevas publicaciones
    // ofertas y demandas.
} 