import { Module } from '@nestjs/common';
import { ConsumidorController } from './Consumidor/consumidor.controller';
import { ConsumidorService } from './consumidor/consumidor.service';

@Module({
  imports: [
  ],
  controllers: [
    ConsumidorController
  ],
  providers: [
    ConsumidorService
  ],
})
export class AppModule {}
