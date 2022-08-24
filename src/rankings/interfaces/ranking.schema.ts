import * as mongoose from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: 'rankings' })
export class Ranking extends mongoose.Document {
  @Prop({ Type: mongoose.Schema.Types.ObjectId })
  desafio: string;

  @Prop({ Type: mongoose.Schema.Types.ObjectId })
  jogador: string;

  @Prop({ Type: mongoose.Schema.Types.ObjectId })
  partida: string;

  @Prop({ Type: mongoose.Schema.Types.ObjectId })
  categoria: string;

  @Prop()
  evento: string;

  @Prop()
  operacao: string;

  @Prop()
  pontos: number;
}

export const RankingSchema = SchemaFactory.createForClass(Ranking);
