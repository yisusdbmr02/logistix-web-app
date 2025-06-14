/**
 * @fileoverview Response class for the find role by ID use case.
 * @module FindRoleByIdResponse
 * @author [Jesús Díaz]
 * @description This class is used to format the response when a role is found by its ID.
 * It encapsulates the role entity and provides a method to convert it to JSON format.
 */
import { Role } from '../../../domain/entities/role.entity';

/**
 * Response class for finding a role by its ID.
 * @class FindRoleByIdResponse
 * @description This class encapsulates the response data for the find role by ID operation.
 * It includes a method to convert the role to a JSON format.
 */
export class FindRoleByIdResponse {
/** 
 * @constructor
 * @param {Role} role - The role entity that was found.
 * @description This constructor initializes the response with the found role entity.
 * It is used to provide the details of the role when it is retrieved by its ID.
 */
  constructor(private readonly role: Role) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the found role.
   * @description This method returns an object containing the role ID and name.
   * It is used to provide a structured response for the find role by ID operation.
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
