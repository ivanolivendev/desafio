import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // ou 'localhost' se estiver rodando localmente
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_db',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Use true apenas em desenvolvimento, para sincronizar automaticamente o esquema
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
