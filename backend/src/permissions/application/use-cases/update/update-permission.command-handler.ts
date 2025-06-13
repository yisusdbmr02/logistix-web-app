/**
 * @fileoverview Command handler for updating a permission.
 * @module UpdatePermissionCommandHandler
 * @author [Jesús Díaz]
 * @description This command handler is responsible for processing the update permission command.
 * It retrieves the current permission, updates its name if provided, and saves the updated permission.
 * If the permission does not exist, it throws an error.
 */

import { Inject } from "@nestjs/common";
import { PermissionRepository } from "src/permissions/domain/interfaces/permission.repository.interface";
import { UpdatePermissionCommand } from "./update-permission.command";
import { UpdatePermissionResponse } from "./update-permission.response";
import { PermissionName } from "src/permissions/domain/value-objects/permission-name.vo";
import { Permission } from "src/permissions/domain/entities/permission.entity";
import { PermissionId } from "src/permissions/domain/value-objects/permission-id.vo";
/**
 * Command handler for updating a permission.
 * @class UpdatePermissionCommandHandler
 * @description This class handles the logic for updating a permission
 * using the provided command.
 * It uses the PermissionRepository to interact with the persistence layer.
 */
export class UpdatePermissionCommandHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for permissions.
   * @description This constructor injects the PermissionRepository to handle the update of permissions.
   */
  constructor(@Inject('PermissionRepository')private readonly repository: PermissionRepository,) {}
  /**
   * Executes the command to update a permission.
   * @param command - The command containing the ID and optional name of the permission to be updated.
   * @returns A promise that resolves to an UpdatePermissionResponse containing the updated permission.
   * @throws {Error} If the permission with the given ID does not exist.
   * @description This method retrieves the current permission, updates its name if provided,
   * and saves the updated permission in the repository.
   */
  async execute(command: UpdatePermissionCommand): Promise<UpdatePermissionResponse> {
    const current = await this.repository.findById(command.id);
    if (!current) throw new Error('Permission not found');

    const name = command.name ? new PermissionName(command.name) : new PermissionName(current.getName());

    const updatedPermission = new Permission(
      new PermissionId(command.id),
      name,
    );

    const saved = await this.repository.update(command.id, updatedPermission);
    return new UpdatePermissionResponse(saved);
  }
}