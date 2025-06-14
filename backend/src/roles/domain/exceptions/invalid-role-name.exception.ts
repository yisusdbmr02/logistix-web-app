/**
 * @fileoverview Exception for invalid roles names.
 * @module InvalidRoleNameException
 * @author [Jesús Díaz]
 * @description This exception is thrown when an invalid role name is provided.
 * It extends the built-in Error class and provides a default message.
 */
export class InvalidRoleNameException extends Error {
  /**
   * Creates an instance of InvalidRoleameException.
   * @constructor
   * @extends Error
   * @param {string} [message] - Optional custom error message.
   * @description This constructor initializes the error with a default message if none is provided.
   */
  constructor(message?: string) {
    super(message ?? 'The role name provided is invalid.');
    this.name = 'InvalidRoleNameException';
  }
}