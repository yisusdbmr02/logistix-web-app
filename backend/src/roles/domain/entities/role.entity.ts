/**
 * @file Represents a Roles entity in the domain layer.
 * This entity encapsulates the properties and behaviors of a roles.
 * It includes methods to retrieve the permission's ID, name and audit trail.
 * @module Roles
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This module defines the Roles entity, which is used to manage roles within the application.
 */

import { AuditTrail } from "src/common/value-objects/audit-trail.vo";
import { RoleId } from "../value-objects/role-id.vo";
import { RoleName } from "../value-objects/role-name.vo";

/**
 * Domain entity representing a role.
 */

export class Role {
  constructor(
    private readonly id: RoleId,
    private readonly name: RoleName,
    private readonly auditTrail: AuditTrail
  ) {}

  /**
   * Gets the unique identifier of the role.
   * @method getId
   * @returns The UUID of the role.
   * @description This method returns the unique identifier of the role as a string.
   */
  getId(): string {
    return this.id.getValue();
  }

  /**
   * Gets the name of the role.
   * @method getName
   * @returns The name of the role.
   * @description This method returns the name of the role as a string.
   */
  getName(): string {
    return this.name.getValue();
  }
  /**
   * Gets the audit trail of the role.
   * @method getAuditTrail
   * @returns The audit trail of the role.
   * @description This method returns the audit trail of the role, which includes creation and modification timestamps.
   */
  getCreatedAt(): Date {
    return this.auditTrail.createdAt.getValue();
  }
  /**
   * Gets the last modified timestamp of the role.
   * @method getLastModifiedAt
   * @returns The last modified timestamp of the role.
   * @description This method returns the last modified timestamp of the role, which is updated whenever the role is modified.
   */
  getLastModifiedAt(): Date {
    return this.auditTrail.lastModifiedAt.getValue();
  }
}
