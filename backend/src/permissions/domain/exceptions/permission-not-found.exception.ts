/**
 * @fileoverview Exception for permission not found.
 * @module PermissionNotFoundException
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This exception is thrown when a permission with a specific ID is not found in the system.
 * It extends the built-in Error class and provides a default message indicating the ID of the missing permission.
 */
export class PermissionNotFoundException extends Error {
  /**
   * Creates an instance of PermissionNotFoundException.
   * @constructor
   * @extends Error
   * @param {string} id - The ID of the permission that was not found.
   * @description This constructor initializes the error with a message indicating the ID of the missing permission.
   */
  constructor(id: string) {
    super(`Permission with ID ${id} not found.`);
    this.name = 'PermissionNotFoundException';
  }
}