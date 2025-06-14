/**
 * @file It implements the logic to handle the creation of a role using the provided command.
 * @module CreateRoleCommandHandler
 * @author [Jesús Díaz]
 * @description This file contains the command handler for creating a new role.
 * It implements the logic to handle the creation of a role using the provided command.
 */
import { Inject } from "@nestjs/common";
import { RolesRepository } from "src/roles/domain/interfaces/role-repository.interface";
import { CreateRoleCommand } from "./create-role.command";
import { CreateRoleResponse } from "./create-role.response";
import { RoleId } from "src/roles/domain/value-objects/role-id.vo";
import { RoleName } from "src/roles/domain/value-objects/role-name.vo";
import { AuditTrail } from "src/common/value-objects/audit-trail.vo";
import { Role } from "src/roles/domain/entities/role.entity";

/**
 * Command handler for creating a new role.
 * This class handles the logic for creating a role
 * using the provided command.
 * It uses the RolesRepository to persist the role entity.
 */
export class CreateRoleCommandHandler {
  /**
   * 
   * @param repository - The repository used to interact with the persistence layer for role.
   * @constructor
   * @description This constructor injects the RoleRepository to handle the creation of role.
   */
  constructor(@Inject('RolesRepository')private readonly repository: RolesRepository,) {}

  /**
   * Executes the command to create a new role.
   * @param command - The command containing the data needed to create a role.
   * @returns A promise that resolves to a CreateRoleResponse containing the created role.
   * @throws {Error} If there is an error during the creation process.
   */
  async execute(command: CreateRoleCommand): Promise<CreateRoleResponse> {
    const id = new RoleId();
    const name = new RoleName(command.name);
    const auditTrail = new AuditTrail();
    const role = new Role(id, name, auditTrail);
    const created = await this.repository.create(role);
    return new CreateRoleResponse(created);
  }
}