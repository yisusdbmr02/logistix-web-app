/**
 * @file CreateRoleResponse
 * @module CreateRoleResponse
 * @author [Jesús Díaz]
 * @description This module defines the response structure for creating a new role.
 * It includes the role ID, name, createAt and lastModifiedAt in the response.
 */
import { Role } from '../../../domain/entities/role.entity';
/**
 * Response class for creating a new role.
 * @class CreateRoleResponse
 * @description This class encapsulates the response data for a created role.
 */
export class CreateRoleResponse {
/** 
 * @constructor
 * @param {Role} role - The role entity that was created.
 * @description This constructor initializes the response with the created role entity.
*/
  constructor(private readonly role: Role) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the created role.
   * @description This method returns an object containing the role ID, name, createdAt, modifiedAt.
   */
  toJSON() {
    return {
      id: this.role.getId(),
      name: this.role.getName(),
      createdAt: this.role.getCreatedAt(),
      lastModifiedAt: this.role.getLastModifiedAt(),
    };
  }
}