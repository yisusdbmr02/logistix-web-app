/**
 * @fileoverview Resolver for deleting a role.
 * @module DeleteRoleResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL mutation for deleting a role.
 * It uses the DeleteRoleCommandHandler to execute the deletion logic.
 */
import { Resolver, Mutation, Args, ID } from '@nestjs/graphql';
import { DeleteRoleCommandHandler } from '../../../application/use-cases/delete/delete-role.command-handler';
import { DeleteRoleCommand } from '../../../application/use-cases/delete/delete-role.command';
/**
 * Resolver for deleting a role.
 * @class DeleteRoleResolver
 * @description This class handles the GraphQL mutation for deleting a role.
 * It uses the DeleteRoleCommandHandler to execute the deletion logic.
 * @implements {Resolver}
 */
@Resolver()
export class DeleteRoleResolver {
  /**
   * Constructor for DeleteRoleResolver.
   * @param deleteHandler - The command handler used to execute the delete role command.
   * @constructor
   * @description This constructor injects the DeleteRoleCommandHandler to handle the deletion of roles.
   */
  constructor(private readonly deleteHandler: DeleteRoleCommandHandler) {}
  /**
   * Mutation for deleting a role.
   * @method deleteRole
   * @param {string} id - The ID of the role to be deleted.
   * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating success or failure.
   * @description This method handles the GraphQL mutation for deleting a role.
   * It takes the role ID as an argument, executes the `DeleteRoleCommandHandler`,
   * and returns a boolean indicating whether the deletion was successful.
   * @throws {Error} If there is an error during the deletion process.
   * @implements {Mutation}
   */
  @Mutation(() => Boolean)
  async deleteRole(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    const command = new DeleteRoleCommand(id);
    const response = await this.deleteHandler.execute(command);
    return response.toJSON().success;
  }
}
