import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { BirdsModule } from './birds/birds.module';

@Module({
  imports: [CatsModule, BirdsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}