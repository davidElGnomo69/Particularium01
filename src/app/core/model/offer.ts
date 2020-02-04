import { Mobility } from './mobility';
import { Comunity } from './comunity';
import { Schedule } from './schedule';

export class Offer {
    private id: string;
    private subject: string;
    private schedule: Schedule;
    private mobility: Mobility;
    private community: Comunity;
    private visibility: string;
    private level: string;


    constructor() {
    }


    /**
     * Getter $id
     * @return {string}
     */
    public get $id(): string {
        return this.id;
    }

    /**
     * Getter $subject
     * @return {string}
     */
    public get $subject(): string {
        return this.subject;
    }

    /**
     * Getter $schedule
     * @return {Schedule}
     */
    public get $schedule(): Schedule {
        return this.schedule;
    }

    /**
     * Getter $mobility
     * @return {Mobility}
     */
    public get $mobility(): Mobility {
        return this.mobility;
    }

    /**
     * Getter $community
     * @return {Comunity}
     */
    public get $community(): Comunity {
        return this.community;
    }

    /**
     * Getter $visibility
     * @return {string}
     */
    public get $visibility(): string {
        return this.visibility;
    }

    /**
     * Getter $level
     * @return {string}
     */
    public get $level(): string {
        return this.level;
    }

    /**
     * Setter $id
     * @param {string} value
     */
    public set $id(value: string) {
        this.id = value;
    }

    /**
     * Setter $subject
     * @param {string} value
     */
    public set $subject(value: string) {
        this.subject = value;
    }

    /**
     * Setter $schedule
     * @param {Schedule} value
     */
    public set $schedule(value: Schedule) {
        this.schedule = value;
    }

    /**
     * Setter $mobility
     * @param {Mobility} value
     */
    public set $mobility(value: Mobility) {
        this.mobility = value;
    }

    /**
     * Setter $community
     * @param {Comunity} value
     */
    public set $community(value: Comunity) {
        this.community = value;
    }

    /**
     * Setter $visibility
     * @param {string} value
     */
    public set $visibility(value: string) {
        this.visibility = value;
    }

    /**
     * Setter $level
     * @param {string} value
     */
    public set $level(value: string) {
        this.level = value;
    }


}
