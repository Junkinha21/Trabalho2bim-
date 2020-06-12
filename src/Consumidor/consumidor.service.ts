import { Injectable } from '@nestjs/common';
import { Consumidor } from './consumidor.entity';

@Injectable()
export class ConsumidorService {

    consumidores: Array<Consumidor> = [];


    constructor() {
    }

    findAll(){
        return this.consumidores;
    }

    findById(id){
        for (let consumidor of this.consumidores){
            if (consumidor.id == id){
                return consumidor;
            }
        }
    }

    save(consumidor: Consumidor){
        this.consumidores.push(consumidor);
    }
}