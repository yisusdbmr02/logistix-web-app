/**
 * @fileoverview Response class for the update role use case.
 * @module UpdateRoleResponse
 * @author [Jesús Díaz]
 * @description This class encapsulates the response data for updating a role.
 * It includes the role ID, name createdAt and lastModifiedAt in the response.
 */
import { Role } from "../../../domain/entities/role.entity";


/**
 * Response class for updating a role.
 * @class UpdateRoleResponse
 * @description This class encapsulates the response data for the update role operation.
 * It includes a method to convert the role to a JSON format.
 */
export class UpdateRoleResponse {
/**
 * @constructor
 * @param {Role} role - The role entity that was updated.
 * @description This constructor initializes the response with the updated role entity.
 * It is used to provide the details of the role after it has been updated.
 */
  constructor(private readonly role: Role) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the updated role.
   * @description This method returns an object containing the role ID and name.
   * It is used to provide a structured response for the update role operation.
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
