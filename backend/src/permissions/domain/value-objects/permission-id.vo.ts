/**
 * @file Value Object for Permission ID (UUID based). Validates input UUID or generates a new one if undefined. 
 * @module PermissionId
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This Value Object encapsulates the logic for handling Permission IDs, ensuring they are valid UUIDs.
 */
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

/**
 * Value Object representing a unique identifier for a permission.
 * It ensures that the ID is a valid UUID.
 */
export class PermissionId {
  private readonly value: string
  /**
   * Creates a new PermissionId instance.
   * If a value is provided, it validates the UUID format.
   * If no value is provided, it generates a new UUID.
   * @param {string} [value] - The UUID string for the permission ID.
   * @throws {Error} If the provided value is not a valid UUID.
   */
  constructor( value?: string) {
    if (value && !uuidValidate(value)) {
      throw new Error('Invalid UUID');
    }
    this.value = value ?? uuidv4(); 
  }
/**
 * Gets the UUID value of the PermissionId.
 * @return {string} The UUID of the permission.
 * @method getValue
 * @description This method returns the UUID value of the PermissionId instance.
 */
  getValue() {
    return this.value;
  }
}