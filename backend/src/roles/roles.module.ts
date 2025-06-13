import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesSchema } from './presentation/persistence/schemas/roles.schema';

/**
 * @file Roles Module
 * @module RolesModule
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This module encapsulates the roles functionality, including its schema and providers.
 * It is responsible for managing roles within the application.
 */
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Roles', schema: RolesSchema }]),
    ],
    providers: []
})
export class RolesModule {}
