import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [],
      synchronize: process.env.SYNCHRONIZE === 'false' ? false : true,
      logging: process.env.LOGGING === 'false' ? false : true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
