/**
 * @fileoverview Response class for the find permission by ID use case.
 * @module FindPermissionByIdResponse
 * @author [Jesús Díaz]
 * @version 1.1.0
 * @description This class is used to format the response when a permission is found by its ID.
 * It encapsulates the permission entity and provides a method to convert it to JSON format.
 */
import { Permission } from '../../../domain/entities/permission.entity';

/**
 * Response class for finding a permission by its ID.
 * @class FindPermissionByIdResponse
 * @description This class encapsulates the response data for the find permission by ID operation.
 * It includes a method to convert the permission to a JSON format.
 */
export class FindPermissionByIdResponse {
/** 
 * @constructor
 * @param {Permission} permission - The permission entity that was found.
 * @description This constructor initializes the response with the found permission entity.
 * It is used to provide the details of the permission when it is retrieved by its ID.
 */
  constructor(private readonly permission: Permission) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the found permission.
   * @description This method returns an object containing the permission ID and name.
   * It is used to provide a structured response for the find permission by ID operation.
   */
  toJSON() {
    return {
      id: this.permission.getId(),
      name: this.permission.getName(),
      createdAt: this.permission.getCreatedAt(),
      lastModifiedAt: this.permission.getLastModifiedAt(),
    };
  }
}
