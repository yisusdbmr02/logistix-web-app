/**
 * @fileoverview Resolver for creating a permission in GraphQL.
 * @module CreatePermissionResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL mutation for creating a new permission.
 * It uses the CreatePermissionCommandHandler to execute the command and return the created permission entity.
 * It defines a mutation named `createPermission` that takes a `CreatePermissionInput` as an argument and returns a `PermissionEntity`.
 * The input includes validation rules to ensure the name is not empty and has a minimum length.
 */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreatePermissionCommandHandler } from '../../../application/use-cases/create/create-permission-command-handler';
import { CreatePermissionCommand } from '../../../application/use-cases/create/create-permission.command';
import { CreatePermissionInput } from '../dtos/create-permission.input';
import { PermissionEntity } from '../entities/permission.entity';
/**
 * Resolver for creating a permission in GraphQL.
 * @class CreatePermissionResolver
 * @description This class handles the GraphQL mutation for creating a new permission.
 * It uses the CreatePermissionCommandHandler to execute the command and return the created permission entity.  
 * It defines a mutation named `createPermission` that takes a `CreatePermissionInput` as an argument and returns a `PermissionEntity`.
 * @implements {Resolver}
 */
@Resolver(() => PermissionEntity)
export class CreatePermissionResolver {
  /**
   * Constructor for CreatePermissionResolver.
   * @param createHandler - The command handler used to execute the create permission command.
   * @constructor
   * @description This constructor injects the CreatePermissionCommandHandler to handle the creation of permissions.
   */
  constructor(private readonly createHandler: CreatePermissionCommandHandler) {}
/** 
 * Mutation for creating a permission.
 * @method createPermission
 * @param {CreatePermissionInput} input - The input data for creating a permission.
 * @returns {Promise<PermissionEntity>} - A promise that resolves to the created permission entity.
 * @description This method handles the GraphQL mutation for creating a new permission.
 * It takes a `CreatePermissionInput` as an argument, executes the `CreatePermissionCommandHandler`,
 * and returns the created `PermissionEntity`.
 * @throws {Error} If there is an error during the creation process.
 * @implements {Mutation}
 */
  @Mutation(() => PermissionEntity)
  async createPermission(@Args('input') input: CreatePermissionInput): Promise<PermissionEntity> {
    const command = new CreatePermissionCommand(input.name);
    const response = await this.createHandler.execute(command);
    return response.toJSON();
  }
}
