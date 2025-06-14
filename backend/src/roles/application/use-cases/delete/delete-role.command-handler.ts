/**
 * @fileoverview Command handler for deleting a role.
 * @module DeleteRoleCommandHandler
 * @author [Jesús Díaz]
 * @description This command handler processes the deletion of a role by its ID.
 * It checks if the role exists and then deletes it, returning a response indicating success.
 */
import { Inject, Injectable } from '@nestjs/common';
import { DeleteRoleCommand } from './delete-role.command';
import { DeleteRoleResponse } from './delete-role.response';
import { RolesRepository } from "../../../domain/interfaces/role-repository.interface";
import { RoleNotFoundException } from '../../../domain/exceptions/role-not-found.exception';
/**
 * @class DeleteRoleCommandHandler
 * @description This class handles the logic for deleting a role
 * using the provided command.
 * It uses the RoleRepository to interact with the persistence layer.
 */
@Injectable()
export class DeleteRoleCommandHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for roles.
   * @description This constructor injects the RolesRepository to handle the deletion of roles.
   */
constructor(@Inject('RolesRepository') private repository: RolesRepository) {}
  /**
   * Executes the command to delete a role.
   * @param command - The command containing the ID of the role to be deleted.
   * @description This method executes the command to delete a role.
   * @returns A promise that resolves to a DeleteRoleResponse indicating success.
   * @throws {RoleNotFoundException} If the role with the given ID does not exist.
   */
  async execute(command: DeleteRoleCommand): Promise<DeleteRoleResponse> {
    const role = await this.repository.findById(command.id);
    if (!role) {
      throw new RoleNotFoundException(command.id);
    }
    await this.repository.delete(command.id);
    return new DeleteRoleResponse(true);
  }
}
