import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesSchema } from './infrastructure/persistence/schemas/roles.schema';

// Use cases - Application Layer
import { CreateRoleCommandHandler } from './application/use-cases/create/create-role-command-handler';
import { UpdateRoleCommandHandler } from './application/use-cases/update/update-role.command-handler';
import { FindAllRolesQueryHandler } from './application/use-cases/find-all/find-all-roles.query-handler';
import { DeleteRoleCommandHandler } from './application/use-cases/delete/delete-role.command-handler';
import { FindRoleByIdQueryHandler } from './application/use-cases/find-by-id/find-role-by-id.query-handler';

// Persistence Repositories - Infrastructure Layer
import { MongoRoleRepository } from './infrastructure/persistence/repositories/roles.repository';
import { CreateRoleRepository } from './infrastructure/persistence/repositories/create-role.repository';
import { FindRoleRepository } from './infrastructure/persistence/repositories/find-role.repository';
import { FindAllRolesRepository } from './infrastructure/persistence/repositories/find-all-roles.repository';
import { UpdateRoleRepository } from './infrastructure/persistence/repositories/update-role.repository';
import { DeleteRoleRepository } from './infrastructure/persistence/repositories/delete-role.repository';

// GraphQL Resolvers - Presentation Layer
import { CreateRoleResolver } from './presentation/graphql/resolvers/create-role.resolver';
import { UpdateRoleResolver } from './presentation/graphql/resolvers/update-role.resolver';
import { FindAllRolesResolver } from './presentation/graphql/resolvers/find-all-roles.resolver';
import { FindRoleByIdResolver } from './presentation/graphql/resolvers/find-by-id-role.resolver';
import { DeleteRoleResolver } from './presentation/graphql/resolvers/delete-role.resolver';

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
    providers: [
       CreateRoleResolver,
       UpdateRoleResolver,
       FindAllRolesResolver,
       FindRoleByIdResolver,
       DeleteRoleResolver,
   
       CreateRoleRepository,
       FindRoleRepository,
       UpdateRoleRepository,
       DeleteRoleRepository,
       FindAllRolesRepository,
       {
         provide: 'RolesRepository',
         useClass: MongoRoleRepository,
       },
   
       CreateRoleCommandHandler,
       UpdateRoleCommandHandler,
       FindAllRolesQueryHandler,
       DeleteRoleCommandHandler,
       FindRoleByIdQueryHandler,
     ],
})
export class RolesModule {}
