import { Demand } from './../model/demand';
import { Offer } from './../model/offer';
import { Filtrable } from './../../interfaces/filtrable';


export class Filtro implements Filtrable {

    private _ofertasEncontradas: Offer[];
    private _todasOfertas: Offer[];
    private _demanda: Demand;

    filtrar(todasOfertas: import('../model/offer').Offer[], demandaBuscada: import('../model/demand').Demand): import('../model/offer').Offer[] {

        this.todasOfertas = todasOfertas;
        this.demanda = demandaBuscada;
        this.ofertasEncontradas = [];
        this.comprobarMateria();
        return this.ofertasEncontradas;
        throw new Error('Method not implemented.');

    }


    private comprobarMateria() {
        this.todasOfertas.forEach(element => {
            this.ofertasEncontradas = [];
            if (this.demanda.$subject === undefined) {
                this.comprobarNivel(element);
            } else if (this.demanda.$subject === element.$subject) {
                this.comprobarNivel(element);
            }

        });
    }
    private comprobarNivel(demanda) {
        if (this.demanda.$level === undefined) {
            this.comprobarModelo(demanda);
        } else if (this.demanda.$level === demanda.$level) {
            this.comprobarModelo(demanda);
        }
    }
    private comprobarModelo(demanda) {
        if (this.demanda.$community === undefined) {
            this.comprobarModalidad(demanda);
        } else if (this.demanda.$community === demanda.$community) {
            this.comprobarModalidad(demanda);
        }
    }
    private comprobarModalidad(demanda) {

        if (this.demanda.$mobility === undefined) {
            this.ofertasEncontradas.push(demanda);
        } else if (this.demanda.$mobility === demanda.$mobility) {
            this.ofertasEncontradas.push(demanda);
        }
    }



    /**
     * Getter ofertasEncontradas
     * @return {Offer[]}
     */
    public get ofertasEncontradas(): Offer[] {
        return this._ofertasEncontradas;
    }

    /**
     * Getter todasOfertas
     * @return {Offer[]}
     */
    public get todasOfertas(): Offer[] {
        return this._todasOfertas;
    }

    /**
     * Getter demanda
     * @return {Demand}
     */
    public get demanda(): Demand {
        return this._demanda;
    }

    /**
     * Setter ofertasEncontradas
     * @param {Offer[]} value
     */
    public set ofertasEncontradas(value: Offer[]) {
        this._ofertasEncontradas = value;
    }

    /**
     * Setter todasOfertas
     * @param {Offer[]} value
     */
    public set todasOfertas(value: Offer[]) {
        this._todasOfertas = value;
    }

    /**
     * Setter demanda
     * @param {Demand} value
     */
    public set demanda(value: Demand) {
        this._demanda = value;
    }

}