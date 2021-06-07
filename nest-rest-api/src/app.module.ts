import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { BeersController } from './beers/beers.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, BeersController],
  providers: [AppService],
})
export class AppModule {}
