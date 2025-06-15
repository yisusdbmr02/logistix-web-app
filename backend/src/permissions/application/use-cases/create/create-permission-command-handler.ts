/**
 * @file It implements the logic to handle the creation of a permission using the provided command.
 * @module CreatePermissionCommandHandler
 * @author [Jesús Díaz]
 * @version 1.1.0
 * @description This file contains the command handler for creating a new permission.
 * It implements the logic to handle the creation of a permission using the provided command.
 */
import { Inject } from "@nestjs/common";
import { PermissionRepository } from "src/permissions/domain/interfaces/permission-repository.interface";
import { CreatePermissionCommand } from "./create-permission.command";
import { CreatePermissionResponse } from "./create-permission.response";
import { PermissionId } from "src/permissions/domain/value-objects/permission-id.vo";
import { PermissionName } from "src/permissions/domain/value-objects/permission-name.vo";
import { Permission } from "src/permissions/domain/entities/permission.entity";
import { AuditTrail } from "src/common/value-objects/audit-trail.vo";

/**
 * Command handler for creating a new permission.
 * This class handles the logic for creating a permission
 * using the provided command.
 * It uses the PermissionRepository to persist the permission entity.
 */
export class CreatePermissionCommandHandler {
  /**
   * 
   * @param repository - The repository used to interact with the persistence layer for permissions.
   * @constructor
   * @description This constructor injects the PermissionRepository to handle the creation of permissions.
   */
  constructor(@Inject('PermissionRepository')private readonly repository: PermissionRepository,) {}

  /**
   * Executes the command to create a new permission.
   * @param command - The command containing the data needed to create a permission.
   * @returns A promise that resolves to a CreatePermissionResponse containing the created permission.
   * @throws {Error} If there is an error during the creation process.
   */
  async execute(command: CreatePermissionCommand): Promise<CreatePermissionResponse> {
    const id = new PermissionId();
    const name = new PermissionName(command.name);
    const auditTrail = new AuditTrail();
    const permission = new Permission(id, name, auditTrail);
    const created = await this.repository.create(permission);
    return new CreatePermissionResponse(created);
  }
}