import { Filtrable } from '../interfaces/filtrable';
import { Offer } from '../core/model/offer';
import { Schedule } from '../core/model/schedule';
import { Mobility } from '../core/model/mobility';
import { Comunity } from '../core/model/comunity';

export class FilterMock implements Filtrable {

    private offers: Offer[] = new Array();

    constructor() {
        this.offers.push(new Offer(1, "Bio", Schedule.MORNING, Mobility.OWN_LOCAL, Comunity.GROUP, "visible", "second grade"));
    }

    filtrar(todasOfertas: import("../core/model/offer").Offer[], demandaBuscada: import("../core/model/demand").Demand): Offer[] {
        var ofertasFiltradas: Offer[]=new Array();
        todasOfertas.forEach(oferta => {
            if (oferta.$subject === demandaBuscada.$subject || oferta.$level === demandaBuscada.$level || oferta.$schedule === demandaBuscada.$schedule || oferta.$community === demandaBuscada.$community || oferta.$mobility === demandaBuscada.$mobility) {
                ofertasFiltradas.push(oferta);
            }
        });
        return ofertasFiltradas;
    }

}