/**
 * @fileoverview UpdateRoleResolver class for GraphQL resolver.
 * @module UpdateRoleResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL mutation for updating a role.
 * It uses the UpdateRoleCommandHandler to execute the update command.
 * 
 */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UpdateRoleCommandHandler } from '../../../application/use-cases/update/update-role.command-handler';
import { UpdateRoleCommand } from '../../../application/use-cases/update/update-role.command';
import { UpdateRoleInput } from '../dtos/update-role.input';
import { RoleEntity } from '../entities/role.entity';
/**
 * Resolver for updating a role.
 * @class UpdateRoleResolver
 * @description This class handles the GraphQL mutation for updating a role.
 * It uses the UpdateRoleCommandHandler to execute the update logic.
 * @implements {Resolver}
 */
@Resolver(() => RoleEntity)
export class UpdateRoleResolver {
  /**
   * Constructor for UpdateRoleResolver.
   * @param updateHandler - The command handler used to execute the update role command.
   * @constructor
   * @description This constructor injects the UpdateRoleCommandHandler to handle the updating of roles.
   */
  constructor(private readonly updateHandler: UpdateRoleCommandHandler) {}
  /**
   * Mutation for updating a role.
   * @method updateRole
   * @param {UpdateRoleInput} input - The input data for updating a role.
   * @returns {Promise<RoleEntity>} - A promise that resolves to the updated role entity.
   * @description This method handles the GraphQL mutation for updating a role.
   * It takes an `UpdateRoleInput` as an argument, executes the `UpdateRoleCommandHandler`,
   * and returns the updated `RoleEntity`.
   * @throws {Error} If there is an error during the update process.
   * @implements {Mutation}
   */
  @Mutation(() => RoleEntity)
  async updateRole(@Args('input') input: UpdateRoleInput): Promise<RoleEntity> {
    const command = new UpdateRoleCommand(input.id, input.name);
    const response = await this.updateHandler.execute(command);
    return response.toJSON();
  }
}
