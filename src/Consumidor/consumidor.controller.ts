import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConsumidorService } from './consumidor.service';
import { Consumidor } from './consumidor.entity';
import { ConsumidorDto } from './consumidor.dto';
import { plainToClass } from "class-transformer";

@Controller('/consumidores')
export class ConsumidorController {

    constructor(private readonly service: ConsumidorService) {
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number){
        return this.service.findById(id)
    }

    @Post()
    save(@Body() consumidorDto: ConsumidorDto) {
        const consumidor = plainToClass(Consumidor, consumidorDto);
        return this.service.save(consumidor);
    }

}