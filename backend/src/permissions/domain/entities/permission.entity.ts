/**
 * @file Represents a Permission entity in the domain layer.
 * This entity encapsulates the properties and behaviors of a permission.
 * It includes methods to retrieve the permission's ID and name.
 * @module Permission
 * @author [Jesús Díaz]
 */
import { PermissionId } from "../value-objects/permission-id.vo";
import { PermissionName } from "../value-objects/permission-name.vo";

/**
 * Domain entity representing a permission.
 */

export class Permission {
  constructor(
    private readonly id: PermissionId,
    private readonly name: PermissionName,
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
}
