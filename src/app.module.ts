import { Module } from '@nestjs/common';
import { RankingsModule } from './rankings/rankings.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.x0v8x.mongodb.net/srranking?retryWrites=true&w=majority',
    ),
    RankingsModule,
    MongooseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ProxyrmqModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
