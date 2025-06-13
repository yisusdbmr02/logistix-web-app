/**
 * @file CreatePermissionResponse
 * @module CreatePermissionResponse
 * @author [Jesús Díaz]
 * @description This module defines the response structure for creating a new permission.
 * It includes the permission ID and name in the response.
 */
import { Permission } from '../../../domain/entities/permission.entity';
/**
 * Response class for creating a new permission.
 * @class CreatePermissionResponse
 * @description This class encapsulates the response data for a created permission.
 */
export class CreatePermissionResponse {
/** 
 * @constructor
 * @param {Permission} permission - The permission entity that was created.
 * @description This constructor initializes the response with the created permission entity.
*/
  constructor(private readonly permission: Permission) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the created permission.
   * @description This method returns an object containing the permission ID and name.
   */
  toJSON() {
    return {
      id: this.permission.getId(),
      name: this.permission.getName(),
    };
  }
}