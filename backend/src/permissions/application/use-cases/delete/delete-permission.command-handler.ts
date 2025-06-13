/**
 * @fileoverview Command handler for deleting a permission.
 * @module DeletePermissionCommandHandler
 * @author [Jesús Díaz]
 * @description This command handler processes the deletion of a permission by its ID.
 * It checks if the permission exists and then deletes it, returning a response indicating success.
 */
import { Inject, Injectable } from '@nestjs/common';
import { DeletePermissionCommand } from './delete-permission.command';
import { DeletePermissionResponse } from './delete-permission.response';
import { PermissionRepository } from "src/permissions/domain/interfaces/permission.repository.interface";
import { PermissionNotFoundException } from '../../../domain/exceptions/permission-not-found.exception';

/**
 * @class DeletePermissionCommandHandler
 * @description This class handles the logic for deleting a permission
 * using the provided command.
 * It uses the PermissionRepository to interact with the persistence layer.
 */
@Injectable()
export class DeletePermissionCommandHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for permissions.
   * @description This constructor injects the PermissionRepository to handle the deletion of permissions.
   */
constructor(@Inject('PermissionRepository') private repository: PermissionRepository) {}
  /**
   * Executes the command to delete a permission.
   * @param command - The command containing the ID of the permission to be deleted.
   * @description This method executes the command to delete a permission.
   * @returns A promise that resolves to a DeletePermissionResponse indicating success.
   * @throws {PermissionNotFoundException} If the permission with the given ID does not exist.
   */
  async execute(command: DeletePermissionCommand): Promise<DeletePermissionResponse> {
    const permission = await this.repository.findById(command.id);
    if (!permission) {
      throw new PermissionNotFoundException(command.id);
    }
    await this.repository.delete(command.id);
    return new DeletePermissionResponse(true);
  }
}
