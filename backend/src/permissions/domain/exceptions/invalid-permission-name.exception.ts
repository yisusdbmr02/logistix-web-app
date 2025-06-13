/**
 * @fileoverview Exception for invalid permission names.
 * @module InvalidPermissionNameException
 * @author [Jesús Díaz]
 * @description This exception is thrown when an invalid permission name is provided.
 * It extends the built-in Error class and provides a default message.
 */
export class InvalidPermissionNameException extends Error {
  /**
   * Creates an instance of InvalidPermissionNameException.
   * @constructor
   * @extends Error
   * @param {string} [message] - Optional custom error message.
   * @description This constructor initializes the error with a default message if none is provided.
   */
  constructor(message?: string) {
    super(message ?? 'The permission name provided is invalid.');
    this.name = 'InvalidPermissionNameException';
  }
}