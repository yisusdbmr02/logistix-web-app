import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionSchema } from './infrastructure/persistence/schemas/permission.schema';

// Use cases - Application Layer
import { CreatePermissionCommandHandler } from './application/use-cases/create/create-permission-command-handler';
import { UpdatePermissionCommandHandler } from './application/use-cases/update/update-permission.command-handler';
import { FindAllPermissionsQueryHandler } from './application/use-cases/find-all/find-all-permissions.query-handler';
import { DeletePermissionCommandHandler } from './application/use-cases/delete/delete-permission.command-handler';
import { FindPermissionByIdQueryHandler } from './application/use-cases/find-by-id/find-permission-by-id.query-handler';

// Persistence Repositories - Infrastructure Layer
import { MongoPermissionRepository } from './infrastructure/persistence/repositories/permission.repository';
import { CreatePermissionRepository } from './infrastructure/persistence/repositories/create-permission.repository';
import { FindPermissionRepository } from './infrastructure/persistence/repositories/find-permission.repository';
import { FindAllPermissionsRepository } from './infrastructure/persistence/repositories/find-all-permissions.repository';
import { UpdatePermissionRepository } from './infrastructure/persistence/repositories/update-permission.repository';
import { DeletePermissionRepository } from './infrastructure/persistence/repositories/delete-permission.repository';

// GraphQL Resolvers - Presentation Layer
import { CreatePermissionResolver } from './presentation/graphql/resolvers/create-permission.resolver';
import { UpdatePermissionResolver } from './presentation/graphql/resolvers/update-permission.resolver';
import { FindAllPermissionsResolver } from './presentation/graphql/resolvers/find-all-permissions.resolver';
import { FindPermissionByIdResolver } from './presentation/graphql/resolvers/find-by-id-permission.resolver';
import { DeletePermissionResolver } from './presentation/graphql/resolvers/delete-permission.resolver';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Permission', schema: PermissionSchema }]),
  ],
  providers: [
    CreatePermissionResolver,
    UpdatePermissionResolver,
    FindAllPermissionsResolver,
    FindPermissionByIdResolver,
    DeletePermissionResolver,

    CreatePermissionRepository,
    FindPermissionRepository,
    UpdatePermissionRepository,
    DeletePermissionRepository,
    FindAllPermissionsRepository,
    {
      provide: 'PermissionRepository',
      useClass: MongoPermissionRepository,
    },

    CreatePermissionCommandHandler,
    UpdatePermissionCommandHandler,
    FindAllPermissionsQueryHandler,
    DeletePermissionCommandHandler,
    FindPermissionByIdQueryHandler,
  ],
})
export class PermissionsModule {}

