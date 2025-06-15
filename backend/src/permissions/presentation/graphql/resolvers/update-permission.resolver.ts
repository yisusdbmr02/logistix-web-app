/**
 * @fileoverview UpdatePermissionResolver class for GraphQL resolver.
 * @module UpdatePermissionResolver
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This resolver handles the GraphQL mutation for updating a permission.
 * It uses the UpdatePermissionCommandHandler to execute the update command.
 * 
 */
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UpdatePermissionCommandHandler } from '../../../application/use-cases/update/update-permission.command-handler';
import { UpdatePermissionCommand } from '../../../application/use-cases/update/update-permission.command';
import { UpdatePermissionInput } from '../dtos/update-permission.input';
import { PermissionEntity } from '../entities/permission.entity';
/**
 * Resolver for updating a permission.
 * @class UpdatePermissionResolver
 * @description This class handles the GraphQL mutation for updating a permission.
 * It uses the UpdatePermissionCommandHandler to execute the update logic.
 * @implements {Resolver}
 */
@Resolver(() => PermissionEntity)
export class UpdatePermissionResolver {
  /**
   * Constructor for UpdatePermissionResolver.
   * @param updateHandler - The command handler used to execute the update permission command.
   * @constructor
   * @description This constructor injects the UpdatePermissionCommandHandler to handle the updating of permissions.
   */
  constructor(private readonly updateHandler: UpdatePermissionCommandHandler) {}
  /**
   * Mutation for updating a permission.
   * @method updatePermission
   * @param {UpdatePermissionInput} input - The input data for updating a permission.
   * @returns {Promise<PermissionEntity>} - A promise that resolves to the updated permission entity.
   * @description This method handles the GraphQL mutation for updating a permission.
   * It takes an `UpdatePermissionInput` as an argument, executes the `UpdatePermissionCommandHandler`,
   * and returns the updated `PermissionEntity`.
   * @throws {Error} If there is an error during the update process.
   * @implements {Mutation}
   */
  @Mutation(() => PermissionEntity)
  async updatePermission(@Args('input') input: UpdatePermissionInput): Promise<PermissionEntity> {
    const command = new UpdatePermissionCommand(input.id, input.name);
    const response = await this.updateHandler.execute(command);
    return response.toJSON();
  }
}
