/**
 * @fileoverview Response class for the find all permissions use case.
 * @module FindAllPermissionsResponse 
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This class is used to encapsulate the response data for retrieving all permissions.
 * It includes a method to convert the permissions to a JSON format.
 * The response contains an array of permissions, each represented by its ID and name.
 */
import { Permission } from '../../../domain/entities/permission.entity';
/**
 * Response class for finding all permissions.
 * @class FindAllPermissionsResponse
 * @description This class encapsulates the response data for the find all permissions operation.
 * It includes a method to convert the permissions to a JSON format.
 */
export class FindAllPermissionsResponse {
  /**
   * @constructor
   * @param permissions - An array of Permission entities.
   * @description This constructor initializes the response with an array of permissions.
   */
  constructor(private readonly permissions: Permission[]) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object[]} An array of permission objects, each containing an ID and name.
   * @description This method returns an array of permissions, where each permission is represented
   * by its ID and name. It is used to provide a structured response for the find all permissions operation.
   */
  toJSON() {
    return this.permissions.map((permission) => ({
      id: permission.getId(),
      name: permission.getName(),
      createdAt: permission.getCreatedAt(),
      lastModifiedAt: permission.getLastModifiedAt(),
    }));
  }
}
