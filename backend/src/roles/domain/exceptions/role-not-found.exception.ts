/**
 * @fileoverview Exception for role not found.
 * @module RoleNotFoundException
 * @author [Jesús Díaz]
 * @description This exception is thrown when a role with a specific ID is not found in the system.
 * It extends the built-in Error class and provides a default message indicating the ID of the missing role.
 */
export class RoleNotFoundException extends Error {
  /**
   * Creates an instance of RoleNotFoundException.
   * @constructor
   * @extends Error
   * @param {string} id - The ID of the role that was not found.
   * @description This constructor initializes the error with a message indicating the ID of the missing role.
   */
  constructor(id: string) {
    super(`Role with ID ${id} not found.`);
    this.name = 'RoleNotFoundException';
  }
}