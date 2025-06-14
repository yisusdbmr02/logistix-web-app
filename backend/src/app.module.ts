import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { PermissionsModule } from './permissions/permissions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
      sortSchema: true,
      playground: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/logistix'),
    ConfigModule.forRoot({isGlobal:true}),
    PermissionsModule,
    RolesModule,
  ],
  exports: [MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
