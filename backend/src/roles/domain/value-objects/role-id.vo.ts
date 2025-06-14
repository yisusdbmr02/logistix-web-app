/**
 * @file Value Object for Role ID (UUID based). Validates input UUID or generates a new one if undefined. 
 * @module RoleId
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This Value Object encapsulates the logic for handling Role IDs, ensuring they are valid UUIDs.
 */
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

/**
 * Value Object representing a unique identifier for a permission.
 * It ensures that the ID is a valid UUID.
 */
export class RoleId {
  private readonly value: string
  /**
   * Creates a new RoleId instance.
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
 * Gets the UUID value of the RoleId.
 * @return {string} The UUID of the role.
 * @method getValue
 * @description This method returns the UUID value of the RoleId instance.
 */
  getValue() {
    return this.value;
  }
}