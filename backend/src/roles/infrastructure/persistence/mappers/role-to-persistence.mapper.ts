/**
 * @fileoverview Mapper for converting a Role entity to its persistence representation.
 * @module RoleToPersistence
 * @author [Jesús Díaz]
 * @description This mapper is used to convert a Role domain entity into a format suitable for persistence in the database.
 * It encapsulates the logic for transforming the domain entity into a structure that can be stored in a database.
 */
import { Role } from '../../../domain/entities/role.entity';

/**
 * Mapper class for converting a Role domain entity to its persistence representation.
 * @class RoleToPersistence
 * @description This class provides a static method to convert a Role entity into a format suitable for database storage.
 */
export class RoleToPersistence {
  /**
   * Converts a Role domain entity to its persistence representation.
   * @param {Role} role - The Role entity to be converted.
   * @returns {object} The persistence representation of the Role entity.
   * @description This method takes a Role entity and returns an object that contains the ID and name of the role,
   * formatted for storage in a database.
   */
  static toPersistence(role: Role): any {
    return {
      _id: role.getId(),
      name: role.getName(),
      createdAt: role.getCreatedAt(),
      lastModifiedAt: role.getLastModifiedAt()
    };
  }
}