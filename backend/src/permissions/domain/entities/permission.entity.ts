/**
 * @file Represents a Permission entity in the domain layer.
 * This entity encapsulates the properties and behaviors of a permission.
 * It includes methods to retrieve the permission's ID and name.
 * @module Permission
 * @author [Jesús Díaz]
 * @version 1.1.0
 */
import { AuditTrail } from "src/common/value-objects/audit-trail.vo";
import { PermissionId } from "../value-objects/permission-id.vo";
import { PermissionName } from "../value-objects/permission-name.vo";

/**
 * Domain entity representing a permission.
 */

export class Permission {
  constructor(
    private readonly id: PermissionId,
    private readonly name: PermissionName,
    private readonly auditTrail: AuditTrail
  ) {}

  /**
   * Gets the unique identifier of the permission.
   * @method getId
   * @returns The UUID of the permission.
   * @description This method returns the unique identifier of the permission as a string.
   */
  getId(): string {
    return this.id.getValue();
  }

  /**
   * Gets the name of the permission.
   * @method getName
   * @returns The name of the permission.
   * @description This method returns the name of the permission as a string.
   */
  getName(): string {
    return this.name.getValue();
  }
    /**
   * Gets the audit trail of the role.
   * @method getAuditTrail
   * @returns The audit trail of the role.
   * @description This method returns the audit trail of the permission, which includes creation and modification timestamps.
   */
  getCreatedAt(): Date {
    return this.auditTrail.createdAt.getValue();
  }
  /**
   * Gets the last modified timestamp of the role.
   * @method getLastModifiedAt
   * @returns The last modified timestamp of the role.
   * @description This method returns the last modified timestamp of the permission, which is updated whenever the role is modified.
   */
  getLastModifiedAt(): Date {
    return this.auditTrail.lastModifiedAt.getValue();
  }
}
