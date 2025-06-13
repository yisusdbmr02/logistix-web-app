/**
 * @fileoverview Response class for the update permission use case.
 * @module UpdatePermissionResponse
 * @author [Jesús Díaz]
 * @description This class encapsulates the response data for updating a permission.
 * It includes the permission ID and name.
 */
import { Permission } from "src/permissions/domain/entities/permission.entity";

/**
 * Response class for updating a permission.
 * @class UpdatePermissionResponse
 * @description This class encapsulates the response data for the update permission operation.
 * It includes a method to convert the permission to a JSON format.
 */
export class UpdatePermissionResponse {
/**
 * @constructor
 * @param {Permission} permission - The permission entity that was updated.
 * @description This constructor initializes the response with the updated permission entity.
 * It is used to provide the details of the permission after it has been updated.
 */
  constructor(private readonly permission: Permission) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the updated permission.
   * @description This method returns an object containing the permission ID and name.
   * It is used to provide a structured response for the update permission operation.
   */
  toJSON() {
    return {
      id: this.permission.getId(),
      name: this.permission.getName(),
    };
  }
}
