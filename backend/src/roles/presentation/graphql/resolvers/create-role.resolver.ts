/**
 * @fileoverview Resolver for creating a role in GraphQL.
 * @module CreateRoleResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL mutation for creating a new role.
 * It uses the CreateRoleCommandHandler to execute the command and return the created role entity.
 * It defines a mutation named `createRole` that takes a `CreateRoleInput` as an argument and returns a `RoleEntity`.
 * The input includes validation rules to ensure the name is not empty and has a minimum length.
 */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateRoleCommandHandler } from '../../../application/use-cases/create/create-role-command-handler';
import { CreateRoleCommand } from '../../../application/use-cases/create/create-role.command';
import { CreateRoleInput } from '../dtos/create-role.input';
import { RoleEntity } from '../entities/role.entity';
/**
 * Resolver for creating a role in GraphQL.
 * @class CreateRoleResolver
 * @description This class handles the GraphQL mutation for creating a new role.
 * It uses the CreateRoleCommandHandler to execute the command and return the created role entity.  
 * It defines a mutation named `createRole` that takes a `CreateRoleInput` as an argument and returns a `RoleEntity`.
 * @implements {Resolver}
 */
@Resolver(() => RoleEntity)
export class CreateRoleResolver {
  /**
   * Constructor for CreateRoleResolver.
   * @param createHandler - The command handler used to execute the create role command.
   * @constructor
   * @description This constructor injects the CreateRoleCommandHandler to handle the creation of roles.
   */
  constructor(private readonly createHandler: CreateRoleCommandHandler) {}
/** 
 * Mutation for creating a role.
 * @method createRole
 * @param {CreateRoleInput} input - The input data for creating a role.
 * @returns {Promise<RoleEntity>} - A promise that resolves to the created role entity.
 * @description This method handles the GraphQL mutation for creating a new role.
 * It takes a `CreateRoleInput` as an argument, executes the `CreateRoleCommandHandler`,
 * and returns the created `RoleEntity`.
 * @throws {Error} If there is an error during the creation process.
 * @implements {Mutation}
 */
  @Mutation(() => RoleEntity)
  async createRole(@Args('input') input: CreateRoleInput): Promise<RoleEntity> {
    const command = new CreateRoleCommand(input.name);
    const response = await this.createHandler.execute(command);
    return response.toJSON();
  }
}
