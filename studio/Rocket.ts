import { Cargo } from "./Cargo";
import { Payload } from "./Payload";


export class Rocket implements Payload{

    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronauts[] = [];

    constructor(totalCapacitKg: number, name: string) {
        this.totalCapacityKg = this.totalCapacityKg;
        this.name = name;
    }
    massKg: number;

}