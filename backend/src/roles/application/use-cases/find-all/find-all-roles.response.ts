/**
 * @fileoverview Response class for the find all roles use case.
 * @module FindAllRolesResponse 
 * @author [Jesús Díaz]
 * @description This class is used to encapsulate the response data for retrieving all roles.
 * It includes a method to convert the roles to a JSON format.
 * The response contains an array of roles, each represented by its ID and name.
 */
import { Role } from '../../../domain/entities/role.entity';
/**
 * Response class for finding all roles.
 * @class FindAllRolesResponse
 * @description This class encapsulates the response data for the find all roles operation.
 * It includes a method to convert the roles to a JSON format.
 */
export class FindAllRolesResponse {
  /**
   * @constructor
   * @param roles - An array of Role entities.
   * @description This constructor initializes the response with an array of roles.
   */
  constructor(private readonly roles: Role[]) {}
  /**
   * Converts the response to a JSON object.
   * @returns {object[]} An array of role objects, each containing an ID and name.
   * @description This method returns an array of roles, where each role is represented
   * by its ID and name. It is used to provide a structured response for the find all roles operation.
   */
  toJSON() {
    return this.roles.map((role) => ({
      id: role.getId(),
      name: role.getName(),
      createdAt: role.getCreatedAt(),
      lastModifiedAt: role.getLastModifiedAt(),
    }));
  }
}
