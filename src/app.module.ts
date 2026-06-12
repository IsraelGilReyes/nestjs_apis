import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BirdsModule } from './birds/birds.module';

@Module({
  imports: [CatsModule, BirdsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}