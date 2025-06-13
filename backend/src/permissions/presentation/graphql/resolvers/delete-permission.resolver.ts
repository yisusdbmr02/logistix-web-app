/**
 * @fileoverview Resolver for deleting a permission.
 * @module DeletePermissionResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL mutation for deleting a permission.
 * It uses the DeletePermissionCommandHandler to execute the deletion logic.
 */
import { Resolver, Mutation, Args, ID } from '@nestjs/graphql';
import { DeletePermissionCommandHandler } from '../../../application/use-cases/delete/delete-permission.command-handler';
import { DeletePermissionCommand } from '../../../application/use-cases/delete/delete-permission.command';
/**
 * Resolver for deleting a permission.
 * @class DeletePermissionResolver
 * @description This class handles the GraphQL mutation for deleting a permission.
 * It uses the DeletePermissionCommandHandler to execute the deletion logic.
 * @implements {Resolver}
 */
@Resolver()
export class DeletePermissionResolver {
  /**
   * Constructor for DeletePermissionResolver.
   * @param deleteHandler - The command handler used to execute the delete permission command.
   * @constructor
   * @description This constructor injects the DeletePermissionCommandHandler to handle the deletion of permissions.
   */
  constructor(private readonly deleteHandler: DeletePermissionCommandHandler) {}
  /**
   * Mutation for deleting a permission.
   * @method deletePermission
   * @param {string} id - The ID of the permission to be deleted.
   * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating success or failure.
   * @description This method handles the GraphQL mutation for deleting a permission.
   * It takes the permission ID as an argument, executes the `DeletePermissionCommandHandler`,
   * and returns a boolean indicating whether the deletion was successful.
   * @throws {Error} If there is an error during the deletion process.
   * @implements {Mutation}
   */
  @Mutation(() => Boolean)
  async deletePermission(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    const command = new DeletePermissionCommand(id);
    const response = await this.deleteHandler.execute(command);
    return response.toJSON().success;
  }
}
