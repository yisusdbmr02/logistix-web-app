/**
 * @fileoverview Command handler for updating a role.
 * @module UpdateRoleCommandHandler
 * @author [Jesús Díaz]
 * @description This command handler is responsible for processing the update role command.
 * It retrieves the current role, updates its name if provided, and saves the updated role.
 * If the role does not exist, it throws an error.
 */

import { Inject } from "@nestjs/common";
import { RolesRepository } from "src/roles/domain/interfaces/role-repository.interface";
import { UpdateRoleCommand } from "./update-role.command";
import { UpdateRoleResponse } from "./update-role.response";
import { RoleName } from "src/roles/domain/value-objects/role-name.vo";
import { Role } from "src/roles/domain/entities/role.entity";
import { RoleId } from "src/roles/domain/value-objects/role-id.vo";
import { AuditTrail } from "src/common/value-objects/audit-trail.vo";
import { LastModifiedAt } from "src/common/value-objects/last-modified-at.vo";
import { CreatedAt } from "src/common/value-objects/created-at.vo";
/**
 * Command handler for updating a role.
 * @class UpdateRoleCommandHandler
 * @description This class handles the logic for updating a role
 * using the provided command.
 * It uses the RoleRepository to interact with the persistence layer.
 */
export class UpdateRoleCommandHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for roles.
   * @description This constructor injects the RoleRepository to handle the update of roles.
   */
  constructor(@Inject('RolesRepository')private readonly repository: RolesRepository,) {}
  /**
   * Executes the command to update a role.
   * @param command - The command containing the ID and optional name of the role to be updated.
   * @returns A promise that resolves to an UpdateRoleResponse containing the updated role.
   * @throws {Error} If the role with the given ID does not exist.
   * @description This method retrieves the current role, updates its name if provided,
   * and saves the updated role in the repository.
   */
  async execute(command: UpdateRoleCommand): Promise<UpdateRoleResponse> {
    const current = await this.repository.findById(command.id);
    if (!current) throw new Error('Role not found');

    const name = command.name ? new RoleName(command.name) : new RoleName(current.getName());

    const updatedRole = new Role(
      new RoleId(command.id),
      name,
      new AuditTrail(
        new CreatedAt(current.getCreatedAt()),
        new LastModifiedAt()
      )
    );

    const saved = await this.repository.update(command.id, updatedRole);
    return new UpdateRoleResponse(saved);
  }
}